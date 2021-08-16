const isRobotBounded = require("./robotBounded")

test('returns true if the robot is bounded', () => {
  expect(isRobotBounded("GLGLGGLGL")).toBe(false)
})
