'use strict';

describe('business trip', () => {
  it('Can successfully add up the weight of all the edges in a direct flight trip from one destination to one other destination', () => {
    const businessTrip = require('../business-trip/business-trip');
    const { Graph } = require('../graph');


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

    let exampleA = businessTrip(graph, ['A', 'B']);
    expect(exampleA).toEqual(1);
  });
  it('Can successfully return null if a trip is not a direct flight', () => {
    const businessTrip = require('../business-trip/business-trip');
    const { Graph } = require('../graph');


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

    let exampleB = businessTrip(graph, ['A', 'B', 'C']);
    let exampleC = businessTrip(graph, ['D', 'B', 'F']);
    expect(exampleB).toEqual(null);
    expect(exampleC).toEqual(null);
  });
  it('Can successfully add up the weight of all the edges in a direct flight trip from one destination to multiple other connecting destinations', () => {
    const businessTrip = require('../business-trip/business-trip');
    const { Graph } = require('../graph');


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

    let exampleA = businessTrip(graph, ['A', 'D', 'F', 'E']);
    expect(exampleA).toEqual(16);
  });
});
