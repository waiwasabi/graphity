'use client'

import React, { useContext, useEffect, useRef } from 'react'
import * as d3 from 'd3';
import { forceSimulation, SimulationNodeDatum } from 'd3-force'
import { GraphContext } from './GraphContext';
import { UserModeContext } from './UserModeContext';

type GraphDatum = { id: string, value: number };

const width = 920;
const height = 500;
const radius = 20;

let select = true;

export default function D3Graph() {
    const { s_graph, setGraph } = useContext(GraphContext);
    const { mode } = useContext(UserModeContext);

    useEffect(() => {
        const graph = JSON.parse(s_graph);
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

        d3.select("#d3-graph svg").remove();

        const simulation = forceSimulation(graph.nodes as SimulationNodeDatum[])
            .force('link', d3.forceLink(graph.links).id(d => (d as GraphDatum).id).distance(60))
            .force('charge', d3.forceManyBody().strength(-200))
            .force('center', d3.forceCenter(width / 2, height / 2));

        const svg: any = d3
            .select('#d3-graph')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .on("click", e => onClick(e));

        var link = svg.selectAll('.link').data(graph.links);
        var node: any = svg.selectAll('.g').data(graph.nodes);
        var circle: any = svg.selectAll('.circle');
        var label: any = svg.selectAll('.node-label');
        console.log(circle);
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
            // .attr("cx", d => d.x)
            // .attr("cy", d => d.y);
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
            circle = node.append('circle')
                .attr('class', 'node')
                .attr('r', radius)
                .attr('fill', 'green')
                .merge(circle);
            label = node.append('text')
                .text(d => d.id)
                .attr('node-label', 'node')
                .style("font-size", "1em")
                .attr('user-select', 'none')
                .merge(label);

            simulation.nodes(graph.nodes as SimulationNodeDatum[]);
            simulation.alpha(1).restart();
        }

        function addNode(event) {
            const point = d3.pointer(event);
            let r = (Math.random() + 1).toString(36).substring(7);
            let newNode = { id: r, value: 7, x: point[0], y: point[1], vx: 0, vy: 0 };
            //let linkNode = { source: 'z', target: r, weight: 1 };
            graph.nodes.push(newNode);
            //graph.links.push(linkNode);
            setGraph(JSON.stringify(graph));
        }

        function selectNode(this, event) {
            console.log(this.querySelector("circle"));
            d3.select(this.querySelector("circle")).style("fill", "yellow");
        }


        function onClick(event) {
            if (event.target.localName == 'svg' && !select) {
                addNode(event);
                update();
            }
        }

    }, []);

    return (
        <></>
    )
}