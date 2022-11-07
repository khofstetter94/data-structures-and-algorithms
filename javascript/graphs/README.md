# Graphs

- Authors: KC Hofstetter
- Followed along coding during lecture w/ Ryan Gallaway

## Challenge

- Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

- add node
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph
- add edge
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph
- get nodes
  - Arguments: none
  - Returns all of the nodes in the graph as a collection (set, list, or similar)
  - Empty collection returned if there are no nodes
- get neighbors
  - Arguments: node
  - Returns a collection of edges connected to the given node
    - Include the weight of the connection in the returned collection
  - Empty collection returned if there are no nodes
- size
  - Arguments: none
  - Returns the total number of nodes in the graph
  - 0 if there are none

## Solution

- You can find some test code at the bottom of the graph.js file! In your terminal, run 'npm test graph.test.js' to test this code.

## API

```js
class Vertex{
  constructor(value){
    this.value = value;
  }
}
```

```js
class Edge {
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }
}
```

```js
class Graph{
  constructor(){
    this.adjacencyList = new Map();
  }
```

```js
addVertex(value)
```

```js
addDirectedEdge(startVertex, endVertex, weight = 0)
```

```js
getNeighbors(vertex)
```

```js
getSize()
```

```js
getNodes()
```

```js
breadthFirst(root, callback)
```

```js
depthFirst(root, cb)
```
