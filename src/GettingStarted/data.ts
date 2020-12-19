export const data = {
  // The array of nodes
  nodes: [
    {
      id: 'node1', // String, unique and required
      x: 100, // Number, the x coordinate
      y: 200, // Number, the y coordinate
    },
    {
      id: 'node2', // String, unique and required
      x: 300, // Number, the x coordinate
      y: 200, // Number, the y coordinate
    },
  ],
  // The array of edges
  edges: [
    {
      source: 'node1', // String, required, the id of the source node
      target: 'node2', // String, required, the id of the target node
    },
  ],
};