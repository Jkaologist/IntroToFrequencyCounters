/**
 * On an infinite plane, a robot initially stands at (0, 0) and faces north.
 * The robot can receive one of three instructions:
 * "G": go straight 1 unit;
 * "L": turn 90 degrees to the left;
 * "R": turn 90 degrees to the right;
 *
 * The robot performs the instructions given in order, and repeats them forever.
 * Return true if and only if there exists a circle in the plane such that
 * the robot never leaves the circle.
 */

function isRobotBounded(instructions) {
  let direction = "North";
  let x = 0;
  let y = 0;
  for (let char of instructions) {
    if (char === "G") {
      if (direction === "North") {
        y++;
      }
      else if (direction === "East") {
        x++;
      }
      else if (direction === "South") {
        y--;
      } 
      else {
        x--;
      }
    }
    else if (char === "L") {
      if (direction === "North") {
        direction = "West";
      }
      else if (direction === "East") {
        direction = "North";
      }
      else if (direction === "South") {
        direction = "East";
      } 
      else {
        direction = "South";
      }
    }
    else if (char === "R") {
      if (direction === "North") {
        direction = "East";
      }
      else if (direction === "East") {
        direction = "South";
      }
      else if (direction === "South") {
        direction = "West";
      } 
      else {
        direction = "North";
      }
    }
  }
  return (x === 0 && y === 0) || direction !== "North";
}

module.exports = isRobotBounded;
