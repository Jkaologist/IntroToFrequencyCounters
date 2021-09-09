let arr = [1000000, -3, 5, -100, -33, 55, 99]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}

function comparisonSort(arr) {
  return arr.sort((a, b) => a-b)
}

console.log(comparisonSort(arr))