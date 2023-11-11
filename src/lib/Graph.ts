import { NodeT, location } from "./NodeT";

export class Graph {
    private nodeLocations: NodeT | undefined [][];
    private nodes: NodeT[];

    constructor() {
        this.nodeLocations = [];
        this.nodes = [];
    }

    getNodes(): NodeT[] {
        return this.nodes;
    }

    getNodeLocations(): NodeT | undefined [][] {
        return this.nodeLocations;
    }

    addNode(node: NodeT): void {
        this.nodes.push(node);
    }
}