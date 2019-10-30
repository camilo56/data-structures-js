const WeightedGraph = require("./WeightedGraph.class");
var weightedGraph;

beforeEach(() => {
  weightedGraph = new WeightedGraph();
})

describe("Binary Search Tree", () => {

  test("insert without root", () => {
    expect(true).toBe(true);
  })
  
  test("add vertex", () => {
    weightedGraph.addVertex("Milo");
    expect(weightedGraph.adjacencyList["Milo"]).toEqual([]);
  })

  test("add Edge", () => {
    weightedGraph.addVertex("Milo");
    weightedGraph.addVertex("Colorado");
    weightedGraph.addEdge("Milo", "Colorado", 20);
    console.log(weightedGraph.adjacencyList)
    expect(weightedGraph.adjacencyList["Milo"][0].node).toEqual('Colorado');
    expect(weightedGraph.adjacencyList["Colorado"][0].weight).toEqual(20);
  })

})
