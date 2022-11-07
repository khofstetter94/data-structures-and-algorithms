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
});
