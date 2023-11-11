export type location = [number, number];

export interface INode {
    id: string;
    getVal(): string;
}

export class NodeT implements INode {
    public id: string;
    private val: string;

    constructor(id:string, val: string) {
        this.id = id;
        this.val = val;
    }

    getVal(): string {
        return this.val;
    }
}

export class GraphNode extends NodeT {
    private edges: GraphNode[];
    private visited: boolean;

    constructor(id:string, val: string) {
        super(id, val);
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