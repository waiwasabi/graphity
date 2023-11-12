import { NodeT, GraphNode } from "./NodeT";
import { DirectedEdge } from "./Edge";

export class Graph {
    private nodes: NodeT[];
    private edges: DirectedEdge[];

    constructor() {
        this.nodes = [];
        this.edges = [];
    }

    getNodes(): NodeT[] {
        return this.nodes;
    }

    getEdges(): DirectedEdge[] {
        return this.edges;
    }

    addNode(node: NodeT): void {
        this.nodes.push(node);
    }

    addEdge(from: GraphNode, to: GraphNode) {
        this.edges.push(new DirectedEdge(from, to));
    }

    addEdgeFromID(from: string, to: string) {
        let fromNode: GraphNode = new GraphNode("", "");
        let toNode: GraphNode = new GraphNode("", "");
        
        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].id === from) {
                fromNode === this.nodes[i];
            }

            else if (this.nodes[i].id === to) {
                toNode === this.nodes[i];
            }
        }

        if (fromNode.id === "" || toNode.id === "") return;
        
        this.edges.push(new DirectedEdge(fromNode, toNode));
    }
}