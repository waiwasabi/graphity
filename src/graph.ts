import {Graph} from './lib/Graph';
import {GraphNode} from './lib/NodeT';
import {DirectedEdge} from './lib/Edge';

export let graph = new Graph();

graph.addNode(new GraphNode("abc123", "1"));
graph.addNode(new GraphNode("cd12", "2"));
graph.addNode(new GraphNode("adsf", "3"));

graph.addEdgeFromID("adsf", "cd12");
graph.addEdgeFromID("adsf", "abc123");
graph.addEdgeFromID("cd12", "abc123");
