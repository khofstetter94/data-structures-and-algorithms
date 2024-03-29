'use strict';

class Vertex{
  constructor(value){
    this.value = value;
    this.neighbors = [];
  }
}

class Edge {
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph{
  constructor(){
    this.adjacencyList = new Map();
  }

  addVertex(value){
    const vertex = new Vertex(value);
    this.adjacencyList.set(value, vertex);
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0){
    const vertex = this.adjacencyList.get(startVertex.value);
    vertex.neighbors.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex){
    return [...this.adjacencyList.get(vertex).neighbors];
  }

  getSize(){
    return this.adjacencyList.size;
  }

  getNodes(){
    return this.adjacencyList.keys();
  }

  breadthFirst(root, callback = () => null){
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;
    while(queue.length){
      current = queue.pop();
      // possible callback area
      if(callback){
        callback(current);
      }
      // grab neighbors
      const neighbors = this.getNeighbors(current);
      for(let edge of neighbors){
        if(!visited.has(edge.vertex)){
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }
    }
    // this returns the entire set
    return visited;
  }

  depthFirst(root, cb){
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;
    while(stack.length){
      current = stack.pop();
      if(cb){
        cb(current.value);
        const neighbors = this.getNeighbors(current);
        for(let edge of neighbors){
          if(!visited.has(edge.vertex)){
            visited.add(edge.vertex);
            stack.push(edge.vertex);
          }
        }
      }
    }
    return visited;
  }
}

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


module.exports = { Graph, Edge };
