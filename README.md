### Instructions
##### Graph Creation
**Node Tool** - Left click on any empty space to create a disconnected node 
**Edge Tool** - Left click on any two nodes to create an edge between them, or delete the edge if one already exists 
**Eraser Tool** - Left click on any node to delete it.
##### Code Generation
Press the **Generate** button to generate the JSON text corresponding to the graph created using the interface
##### Graph Visualization
User input in the text editor is transformed into a TypeScript function that is called, which can be used to visualize the algorithm performed on the graph in real-time. The user does not need to include a class header, only the body of the following function:

``` ts
function traverse(graph: Graph): void {
	/* User input goes here */
}
```

At each step the user would like to visualize, **visit()** should be called on the node they would like highlighted. Additional documentation can be found below.
### Documentation
##### Graph object
The exposed `graph` variable is of type `graphology.Graph`. Please see https://graphology.github.io/ for relevant documentation.
``` ts
class Graph {
	/* Returns the array of all Node objects in the graph */
	getNodes(): GraphNode[];

	/* Returns the array of all Edge object in the graph */
	getEdges(): DirectedEdge[];

	/* Adds a new GraphNode object into the Graph */
	addNode(node: GraphNode): void;

	/* Adds a new Edge object between two pre-existing nodes */
	addEdge(from: GraphNode, to: GraphNode): void;
}
```
