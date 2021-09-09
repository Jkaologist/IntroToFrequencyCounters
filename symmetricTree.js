// let isSymmetric = function(root) {
//   return isEqual(root, root)
// }

// function isEqual(n1, n2) {
//   if (n1 == null && n2 == null) { return true }
//   if (n1 == null || n2 == null) { return false }
//   return (n1.val === n2.val) && isEqual(n1.right, n2.left) && isEqual(n2.right, n1.left)
// }

function isSymmetric(root) {
  let arr = []
  arr.unshift(root, root)
  while(arr.length !== 0) {
    let t1 = arr.shift()
    let t2 = arr.shift()
    if (t1 === null && t2 === null) continue
    if (t1 === null || t2 === null) return false
    if (t1.val !== t2.val) return false
    arr.unshift(t1.left, t2.right, t1.right, t2.left)
  }
  return true
}