export type location = [number, number];

export interface INode {
    getVal(): string;
    getLoc(): location;
}

export class NodeT implements INode {
    private val: string;
    private loc: location;

    constructor(val: string, loc: location) {
        this.val = val;
        this.loc = loc;
    }

    getVal(): string {
        return this.val;
    }

    getLoc(): location {
        return this.loc;
    }
}

export class GraphNode extends NodeT {
    private edges: GraphNode[];

    constructor(val: string, loc: location) {
        super(val, loc);
        this.edges = [];
    }

    getEdges(): GraphNode[] {
        return this.edges;
    }

    addEdge(node: GraphNode): void {
        this.edges.push(node);
    }
}

export class NodeImage {
    private node: NodeT;
    private filled: boolean;

    constructor(node: NodeT) {
        this.node = node;
        this.filled = false;
    }

    fill() {
        this.filled = true;
    }
}