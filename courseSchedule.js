/**
 * @param {*} numCourses integer
 * @param {*} prereqs [[integers]]
 * @returns boolean
 */
class Solution {
  constructor(obj) {
    this.obj = obj;
  }
  // if we can finish return true if not return false
  canFinish(numCourses, prereqs) {
    let courseDict = {};
    for (let prereq of prereqs) {
      let nextCourse = prereq[0];
      let prevCourse = prereq[1];
      if (courseDict[prevCourse] === undefined) {
        courseDict[prevCourse] = [nextCourse];
      }
      else {
        courseDict[prevCourse].push(nextCourse);
      }
    }
    // create an array filled with false of length number of courses to take
    let path = Array(numCourses).fill(false);
    for (let currCourse = 0; currCourse < numCourses; currCourse++) {
      if (this.isCyclic(currCourse, courseDict, path)) {
        return false;
      }
    }
    return true;
  }
  // backtracks checking that no cycle is formed starting from the curr course
  isCyclic(currCourse, courseDict, path) {
    if (path[currCourse]) {
      // came across a previously visited node, detect the cycle
      return true;
    }
    // before backtracking mark the node in the path
    path[currCourse] = true;
    // backtracking
    let ret = false;
    if (courseDict[currCourse] === undefined) {
      return ret
    }
    for (let child in courseDict[currCourse]) {
      ret = this.isCyclic(child, courseDict, path);
      if (ret) {
        break;
      }
    }
    // after backtracking, remove the node from the path
    path[currCourse] = false;
    return ret;
  }
}

let S = new Solution();
