/**
 * You are given an array prices where prices[i] is the
 * price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day
 * to buy one stock and choosing a different day in the future
 * to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 *
 * @param {number[]} prices
 * @return {number}
 */

// // Super slow double loop brute force approach, prob O(N^2) TC
// function maxProfit(prices) {
//   let profits = {};
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[j] - prices[i] > 0) {
//         profits[prices[i]] = !profits[prices[i]]
//           ? [prices[j] - prices[i]]
//           : [...profits[prices[i]], prices[j] - prices[i]]
//       }
//     }
//   }
//   let maximum = 0;
//   for (let key in profits) {
//     for (let profit of profits[key]) {
//       if (profit > maximum) {
//         maximum = profit
//       }
//     }
//   }
//   return maximum;
// }

// Kadane's Algorithm AKA sliding window O(N) TC
function maxProfit(prices) {
  let maxProfit = 0
  let startingIdx = 0
  let slidingIdx = 1
  let currVal = 0
  while(slidingIdx < prices.length) {
    currVal = prices[slidingIdx] - prices[startingIdx]
    slidingIdx ++
    if (slidingIdx === prices.length) {
      startingIdx ++
      slidingIdx = startingIdx + 1
      continue;
    }
    if (currVal > maxProfit) {
      maxProfit = currVal
    }
  }
  return maxProfit
}

module.exports = maxProfit;
