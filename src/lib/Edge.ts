import { start } from "repl";
import {location, GraphNode} from "./NodeT"

export class Edge {
    private startNode: GraphNode;
    private endNode: GraphNode;

    constructor(startNode: GraphNode, endNode: GraphNode) {
        this.startNode = startNode;
        this.endNode = endNode;
    }
}

export class DirectedEdge extends Edge {
    constructor(startNode: GraphNode, endNode: GraphNode) {
        super(startNode, endNode);
        startNode.addEdge(endNode);
    }
}

export class UndirectedEdge extends Edge {
    constructor(startNode: GraphNode, endNode: GraphNode) {
        super(startNode, endNode);
        startNode.addEdge(endNode);
        endNode.addEdge(startNode);
    }
}