function maximumUnits(boxTypes, truckSize) {
  /**
   * First input is an array of arrays of two integers.
   * The first number is the number of boxes of type i. 
   * The number of units of type i in each box. 
   * The second input is a given an integer for max truck size
   * 
   * The output is the maximum number of units that can be 
   * placed on the truck.
   */

//   // Brute force approach for finding max units O(n^2) TC O(1) SC
//   let totalUnits = 0
//   let remainingTruckSpace = truckSize

//   while (remainingTruckSpace > 0) {
//     let maxUnitBoxIdx = findMaxUnitBox(boxTypes)
//     if (maxUnitBoxIdx === -1) break
//     let boxCount = Math.min(remainingTruckSpace, boxTypes[maxUnitBoxIdx][0])
//     totalUnits += boxCount * boxTypes[maxUnitBoxIdx][1]
//     remainingTruckSpace -= boxCount
//     boxTypes[maxUnitBoxIdx][1] = -1
//   }
//   return totalUnits
// }

// function findMaxUnitBox(boxTypes) {
//   let maxUnitBoxIdx = -1
//   let maxUnits = 0
//   for (let i = 0; i < boxTypes.length; i++) {
//     if (boxTypes[i][1] > maxUnits) {
//       maxUnits = boxTypes[i][1]
//       maxUnitBoxIdx = i
//     }
//   }
//   return maxUnitBoxIdx
// }

// sort by highest method O(nlogn) TC O(n) SC
  boxTypes.sort((a, b) => b[1] - a[1])
  let totalUnits = 0
  for (let box of boxTypes) {
    boxCount = Math.min(box[0], truckSize)
    totalUnits += boxCount * box[1]
    truckSize -= boxCount
    if (truckSize === 0) break
  }
  return totalUnits
}

module.exports = maximumUnits