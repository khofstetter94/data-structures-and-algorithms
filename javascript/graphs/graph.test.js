'use strict';

describe('graph', () => {
  it('Node can be successfully added to the graph', () => {
    const { Graph } = require('./graph');
    const graph = new Graph();

    graph.addVertex('A');
    let node = graph.getNodes();
    let map = new Map();

    expect(node).toEqual(map.keys().toString());
  });
  it('An edge can be successfully added to the graph', () => {
    const { Graph } = require('./graph');
    const graph = new Graph();

    const A = graph.addVertex('A');
    const B = graph.addVertex('B');

    graph.addDirectedEdge(A, B);

    expect(graph).toBe(`{"adjacencyList": Map {{"value": "A"} => []}}`);
  });
  // it('A collection of all nodes can be properly retrieved from the graph', () => {
  //   const { Graph } = require('./graph');
  //   const graph = new Graph();

  //   const A = graph.addVertex('A');
  //   const B = graph.addVertex('B');

  //   graph.addDirectedEdge(A, B);

  //   expect(graph).toBe(`{"adjacencyList": Map {{"value": "A"} => []}}`);
  // });
  // it('All appropriate neighbors can be retrieved from the graph', () => {
  //   const { Graph } = require('./graph');
  //   const graph = new Graph();

  //   const A = graph.addVertex('A');
  //   const B = graph.addVertex('B');

  //   graph.addDirectedEdge(A, B);

  //   expect(graph).toBe(`{"adjacencyList": Map {{"value": "A"} => []}}`);
  // });
  // it('Neighbors are returned with the weight between nodes included', () => {
  //   const { Graph } = require('./graph');
  //   const graph = new Graph();

  //   const A = graph.addVertex('A');
  //   const B = graph.addVertex('B');

  //   graph.addDirectedEdge(A, B);

  //   expect(graph).toBe(`{"adjacencyList": Map {{"value": "A"} => []}}`);
  // });
  // it('The proper size is returned, representing the number of nodes in the graph', () => {
  //   const { Graph } = require('./graph');
  //   const graph = new Graph();

  //   const A = graph.addVertex('A');
  //   const B = graph.addVertex('B');

  //   graph.addDirectedEdge(A, B);

  //   expect(graph).toBe(`{"adjacencyList": Map {{"value": "A"} => []}}`);
  // });
  // it('A graph with only one node and edge can be properly returned', () => {
  //   const { Graph } = require('./graph');
  //   const graph = new Graph();

  //   const A = graph.addVertex('A');
  //   const B = graph.addVertex('B');

  //   graph.addDirectedEdge(A, B);

  //   expect(graph).toBe(`{"adjacencyList": Map {{"value": "A"} => []}}`);
  // });
  it('can traverse a graph with breadth first traversal', () => {
    const { Graph } = require('./graph');
    const graph = new Graph();

    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');
    const D = graph.addVertex('D');
    const E = graph.addVertex('E');
    const F = graph.addVertex('F');
    const G = graph.addVertex('G');
    const H = graph.addVertex('H');

    graph.addDirectedEdge(A, B);
    graph.addDirectedEdge(A, D);
    graph.addDirectedEdge(A, C);
    graph.addDirectedEdge(B, G);
    graph.addDirectedEdge(D, F);
    graph.addDirectedEdge(D, H);
    graph.addDirectedEdge(F, H);
    graph.addDirectedEdge(C, H);
    graph.addDirectedEdge(F, E);

    let results = graph.breadthFirst(A, console.log);

    expect(results).toBe(`Set {{"value": "A"}, {"value": "B"}, {"value": "D"}, {"value": "C"}, {"value": "G"}, {"value": "F"}, {"value": "H"}, {"value": "E"}}`);
  });
});
