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
    private visited: boolean;

    constructor(val: string, loc: location) {
        super(val, loc);
        this.edges = [];
        this.visited = false;
    }

    getEdges(): GraphNode[] {
        return this.edges;
    }

    addEdge(node: GraphNode): void {
        this.edges.push(node);
    }

    /**
     * Traverses the node and marks it as visited
     */
    visit(): void {
        this.visited = true;
    }

    isVisited(): boolean {
        return this.visited;
    }
}

export class NodeImage {
    
}