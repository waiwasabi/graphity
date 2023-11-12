### Instructions
##### Graph Creation
**Node Tool**  ![circle](https://github.com/waiwasabi/hack2023/assets/58406472/02abd2bd-55a1-4dda-a5b0-19f99822a377) - Left click on any empty space to create a disconnected node


**Edge Tool**  ![arrow](https://github.com/waiwasabi/hack2023/assets/58406472/79e4991d-0bb0-49b5-9aed-fb2611a6a06d) - Left click on any two nodes to create an edge between them, or delete the edge if one already exists 

**Eraser Tool** ![eraser](https://github.com/waiwasabi/hack2023/assets/58406472/186fd6fd-6f15-451c-a33e-3f453c5be1a9) - Left click on any node to delete it.

##### Serialized Graph Generation
Trigger the **Generate** button to generate a serialized representation of the graph.

##### Graph Visualization
User input in the text editor is transformed into a JavaScript function, which can be used to run an algorithm on the graph in real-time. The user need not need include a class header, only the body of the following function:

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

### Examples
Below are example use cases of the shell.

#### Basic Analysis
```ts
/* print the number of nodes in the graph */
console.log(graph.order);
```

#### Graph Search
```ts
/* Perform Breadth-First Search on the graph */
const visited = new Set();
const queue = ["r"];
const result = [];

visited.add("r");

while (queue.length > 0) {
  const currentNode = queue.shift();
  result.push(currentNode);

  const neighbors = graph.neighbors(currentNode);
  for (let i = 0; i < neighbors.length; i++) {
    const neighbor = neighbors[i];
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      queue.push(neighbor);
      console.log(neighbor);
    }
  }
}
```

