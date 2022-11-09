'use strict';
const { Graph } = require('../graph');

function businessTrip(graph, cityArray) {
  // ['Seattle','Las Vegas','Miami','Cartagena']
  let placesYetVisited = [...cityArray];
  placesYetVisited.shift();
  let placesAlreadyVisited = [
    graph.adjacencyList.get(cityArray[0]),
  ];
  const costThusFar = [0];

  while (placesYetVisited.length) {
    const lastPlaceVisited = placesAlreadyVisited[placesAlreadyVisited.length - 1];
    const nextPlaceToVisit = placesYetVisited[0];
    const edgesToNeighbors = graph.getNeighbors(lastPlaceVisited.value);

    let nextDestinationFoundInNeighbors = false;
    for (let edge of edgesToNeighbors) {
      if (edge.vertex.value === nextPlaceToVisit) {
        costThusFar.push(edge.weight);
        placesAlreadyVisited.push(edge.vertex);
        placesYetVisited.shift();
        nextDestinationFoundInNeighbors = true;
      }
    }

    if (!nextDestinationFoundInNeighbors) {
      return null;
    }
  }

  return costThusFar.reduce((sum, num) => sum + num, 0);
}

function getExampleGraph() {
  const graph = new Graph();

  const A = graph.addVertex('A');
  const B = graph.addVertex('B');
  const C = graph.addVertex('C');
  const D = graph.addVertex('D');
  const E = graph.addVertex('E');
  const F = graph.addVertex('F');
  const G = graph.addVertex('G');
  const H = graph.addVertex('H');

  graph.addDirectedEdge(A, B, 1);
  graph.addDirectedEdge(A, D, 2);
  graph.addDirectedEdge(A, C, 3);
  graph.addDirectedEdge(B, G, 4);
  graph.addDirectedEdge(D, F, 5);
  graph.addDirectedEdge(D, H, 6);
  graph.addDirectedEdge(F, H, 7);
  graph.addDirectedEdge(C, H, 8);
  graph.addDirectedEdge(F, E, 9);

  return graph;
}

let graph = getExampleGraph();

console.log(businessTrip(graph, ['A', 'B', 'G']));
console.log(businessTrip(graph, ['A', 'B', 'C']));
console.log(businessTrip(graph, ['D', 'B', 'F']));
console.log(businessTrip(graph, ['D', 'F', 'E']));
console.log(businessTrip(graph, ['A', 'C', 'H']));

module.exports = businessTrip;
