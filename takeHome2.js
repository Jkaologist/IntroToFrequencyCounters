process.stdin.resume();
process.stdin.setEncoding("utf8");

class ClassNode {
  constructor(classID, adjacent = new Set()) {
    this.classID = classID;
    this.adjacent = adjacent;
  }
}

class ClassGraph {
  constructor() {
    this.nodes = new Set();
  }
  
  addClass(c) {
    this.nodes.add(c);
  }
  
  setAdjacent(c1, c2) {
    c1.adjacent.add(c2);
    c2.adjacent.add(c1);
  }
  
  addClasses(class_list) {
    for (let c of class_list) {
      this.addClass(c);
    }
  }
  
  // TODO: use topological sort to traverse graph vertices and find optimal soln
  topologicalSortHelper(node, explored, s) {
    explored.add(node);
    // Marks this node as visited and goes on to the nodes
    // that are dependent on this node, the edge is node ----> n
    this.edges[node].forEach((n) => {
      if (!explored.has(n)) {
        this.topologicalSortHelper(n, explored, s);
      }
    });
    // All dependencies are resolved for this node, we can now add
    // This to the stack.
    s.push(node);
  }
  
  topologicalSort() {
    // Create a Stack to keep track of all elements in sorted order
    let s = new Stack(this.nodes.length);
    let explored = new Set();
    
    // For every unvisited node in our graph, call the helper.
    this.nodes.forEach((node) => {
      if (!explored.has(node)) {
        this.topologicalSortHelper(node, explored, s);
      }
    });
    
    while (!s.isEmpty()) {
      console.log(s.pop());
    }
  }
}

let g = new ClassGraph();

let arr = [];
var stdin = "";
process.stdin
.on("data", function (chunk) {
  stdin += chunk;
  arr.push(chunk.trim().split(" "));
})
  .on("end", function () {
    arr = courseSchedule(arr);
    // buildGraph(arr, g);
    console.log(arr);
    var lines = stdin.trim().split("\n");
    for (var i = 1; i < lines.length; i++) {
      process.stdout.write(lines[i]);
    }
  });

// conversion from strings to ints array
function courseSchedule(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = parseInt(arr[i][j]);
    }
  }
  return arr;
}

// fills the graph with nodes and sets adjacencies
function buildGraph(arr, g) {
  let class_list = [];
  for (let i = 1; i < arr.length; i++) {
    class_list.push(new ClassNode(arr[i][0]));
  }
  g.addClasses(class_list);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      console.log(arr[i][0], arr[i][j])
      g.setAdjacent(new ClassNode(arr[i][0]), new ClassNode(arr[i][j]))
    }
  }
  return g;
}

/**
 * Rephrase the problem
 * let courses = [ 0, ..., N-1, N]
 * 0 based idx from 0 to N - 1
 * can only attend a single course at a time
 * complete all courses in a linear sequence satisfying prerequisites
 * prerequisites exist must finished some courses[idx] before other courses[idx]
 * if more than 1 sequence exists return the schedule
 * that is ordered by idx from smallest to largest
 */

/**
 * Understanding the inputs/outputs
 * The first line always takes a positive int representing the number of courses total
 * From the second line on,
 * The positive integer represents the classes requires as prerequisites
 * all other integers indicate which courses are required for the class or first integer of the row
 *
 * Input example:
 * 4
 * 1 0
 * 2 0
 * 3 1 2
 * The first row means that there are 4 courses in the academic program.
 * The second and third rows define that course 0 must be taken before courses 1 and 2.
 * And the fourth row defines that courses 1 and 2 must be taken before course 3.
 *
 * Output:
 * A schedule containing a space-delimited list of courses, in the order of their attendance. For example:
 * 0 1 2 3
 * For this example, another schedule exists 0 2 1 3.
 * But we must select the variant 0 1 2 3 where course 1
 * (with a smaller index) is attended before the course 2 (with a greater index).
 */

/**
 * Proposed solution
 * build subarrays for each line of the input
 * take the first index of each
 *
 * lets start with a relatively easy problem and incrementally make it more difficult
 * input:
 * 4
 * 1 0
 * 2 0
 * 3 1 2
 * output:
 * 0 1 2 3
 * build a set of key values where the requisites of every class exists for example
 * notice the outputs appears to have 0 to top number - 1 in a certain order
 *
 * we want to take the lowest prerequisite class available for any number first before the highest prerequisite class
 * if a prerequisite also exists in the idx 0 slots, we want to set the first class we need to take recursively
 *
 */

/**
 * Proposed solution
 * build subarrays for each line of the input
 * take the first index of each
 *
 * lets start with a relatively easy problem and incrementally make it more difficult
 * input:
 * 4
 * 1 0
 * 2 0
 * 3 1 2
 * output:
 * 0 1 2 3
 * prototype a node for each of these classes in a graph
 * link the proper classes to their prerequisites
 *
 * we want to take the lowest prerequisite class available for any number first before the highest prerequisite class
 * so we may need to fill in the graph with all numbers not represented in the data input at the proper nodes
 *
 * finally fill the return course schedule by traversing the graph in ascending order
 *
 */
