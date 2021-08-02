function mergeTwoLists(l1, l2) {
  if (l1.length === 0 && l2.length === 0) return []
  if (l1.length === 0) return l2
  if (l2.length === 0) return l1
  function addListNode(l1, l2, idx1 = 0, idx2 = 0, l3 = []) {
    // base case
    if (idx1 === l1.length && idx2 === l2.length) {
      return l3
    }
    if (l1.length === idx1 && l2.length >= idx2) {
      return l3.concat(l2.slice(idx2))
    }
    if (l2.length === idx2 && l1.length >= idx1) {
      return l3.concat(l1.slice(idx1))
    }
    // business logic
    if (l1[idx1].val < l2[idx2].val) {
      l3.push(l1[idx1])
      if ((idx1 + idx2) > 0) {
        l3[idx1 + idx2 - 1].next = l3[idx1 + idx2].val
      }
      idx1++
    }
    if (l2[idx2].val < l1[idx1].val) {
      l3.push(l2[idx2])
      if ((idx1 + idx2) > 0) {
        l3[idx1 + idx2 - 1].next = l3[idx1 + idx2].val
      }
      idx2++
    }
    if (l1[idx1].val === l2[idx2].val){
      l3.push(l2[idx2])
      if ((idx1 + idx2) > 0) {
        l3[idx1 + idx2 - 1].next = l3[idx1 + idx2].val
      }
      idx2++
      l3.push(l1[idx1])
      if ((idx1 + idx2) > 0) {
        l3[idx1 + idx2 - 1].next = l3[idx1 + idx2].val
      }
      idx1++    
    }
    // recursive function call
    return addListNode(l1, l2, idx1, idx2, l3)
  }
  return addListNode(l1, l2)
}

module.exports = mergeTwoLists