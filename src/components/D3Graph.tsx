'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import * as d3 from 'd3';
import { forceSimulation, SimulationNodeDatum } from 'd3-force'
import { GraphContext } from './GraphContext';
import { UserModeContext, UserMode } from './UserModeContext';

type GraphDatum = { id: string, value: number };

const width = 920;
const height = 500;
const radius = 23;


let connectArray: [any, any] = [null, null];


export default function D3Graph() {
    const { s_graph, setGraph } = useContext(GraphContext);
    const { mode } = useContext(UserModeContext);
    const modeRef = useRef();
  
    useEffect(() => {
      modeRef.current = mode;
    }, [mode]);

    var svg, link, node, circle, label;

    const drag = (simulation) => {
        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        return d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended);
    };

    const graph = JSON.parse(s_graph);
    const simulation = forceSimulation(graph.nodes as SimulationNodeDatum[])
            .force('charge', d3.forceManyBody().strength(-200))
            .force('center', d3.forceCenter(width / 2, height / 2));;
    unpinNodes();

    function unpinNodes(){
        simulation
            .force('link', d3.forceLink(graph.links).id(d => (d as GraphDatum).id).distance(60))
    }        

    useEffect(() => {
        d3.select("#d3-graph svg").remove();
        svg = d3
            .select('#d3-graph')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .on("click", e => onClick(e));
        link = svg.selectAll('.link').data(graph.links);
        node = svg.selectAll('.g').data(graph.nodes);
        circle = svg.selectAll('.circle');
        label = svg.selectAll('.node-label');
        update();

        simulation.on("tick", () => {
            //update link positions
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            // update node positions

            //node
            circle  // todo: pan
                .attr('cx', function (d) { return d.x = Math.max(radius, Math.min(width - radius, d.x)); })
                .attr('cy', function (d) { return d.y = Math.max(radius, Math.min(height - radius, d.y)); })

            // update label positions
            label
                .attr("x", d => { return d.x; })
                .attr("y", d => { return d.y; })

        });

        function update() {
            link = link.data(graph.links, d => d.id);
            link.exit().remove();
            link = link.enter()
                .append('line')
                .attr('class', 'link')
                .attr("stroke", "#999")
                .attr("stroke-opacity", 0.6)
                .merge(link)
                .lower();

            node = node.data(graph.nodes, d => d.id);
            node = node.enter()
                .append('g')
                .attr('nodeID', d => d.id)
                .merge(node)
                .call(drag(simulation))
                .on('click', selectNode);
            circle.remove();
            circle = node.append('circle')
                .attr('class', 'node')
                .attr('r', radius)
                .attr('fill', 'green')
                .merge(circle);
            label.remove();
            label = node.append('text')
                .text(d => d.id)
                .attr('node-label', 'node')
                .style("font-size", "1.5em")
                .attr("text-anchor", "middle")
                .style("font-family", "monospace")
                .attr('user-select', 'none')
                .merge(label);


            simulation.nodes(graph.nodes as SimulationNodeDatum[]);
            simulation.alpha(1).restart();
        }

        function addNode(event) {
            const point = d3.pointer(event);
            let r = (Math.random() + 1).toString(36).substring(7);
            let newNode = { id: r, value: 0, x: point[0], y: point[1], vx: 0, vy: 0 };
            graph.nodes.push(newNode);
            setGraph(JSON.stringify(graph, null, 2));
        }

        function addEdge(cur){
            if (connectArray[0] == null) {
                connectArray[0] = cur;
                connectArray[1] = null;
                d3.select(cur.querySelector("circle")).style("fill", "purple");
            }
            else if (connectArray[0] != null && connectArray[1] == null && connectArray[0] != cur) {
                connectArray[1] = cur;
                d3.select(cur.querySelector("circle")).style("fill", "purple");

                let x = connectArray[0].getAttribute("nodeID");
                let y = connectArray[1].getAttribute("nodeID");
                let connectBool: boolean = true;

                graph.links.forEach(link => {
                    if (link.source.id == x && link.target.id == y) {
                        //console.log('can\'t add this connection');
                        connectBool = false;
                    }
                });

                if (connectBool) {
                    graph.links.push({ source: x, target: y, weight: 1 });
                }

                connectArray[0] = null;
                connectArray[1] = null;
                update();
            }
        }

        function deleteNode(cur){
            let curID =  cur.getAttribute("nodeID");
            graph.nodes = graph.nodes.filter(node => curID != node.id);
            
            graph.links = graph.links.filter(function(l){
                return l.source.id !== curID && l.target.id !== curID;
            });

            unpinNodes();
            update();
        }

        function selectNode(this, event) {
            //let node = this.querySelector("circle");
            if (modeRef.current === UserMode.Point) {
                d3.select(this.querySelector("circle")).style("fill", "yellow");
                //todo: add node info somewhere in the page
            }

            else if (modeRef.current === UserMode.Edge) {
                addEdge(this);
            }

            else if(modeRef.current == UserMode.Delete){
                deleteNode(this);
            }
        }

        function onClick(event) {
            if (event.target.localName == 'svg' && modeRef.current === UserMode.Node) {
                addNode(event);
                update();
            }
        }
    }, []);

    return (
        <></>
    )
}
