function mergeLists(l1, l2) {
  // same base cases
  if (l1 === null) { return l2 }
  if (l2 === null) { return l1 }

  // if list one's node is currently smaller than list two's node val
  if (l1.val < l2.val) {
    l1.next = mergeLists(l1.next, l2)
    return l1
  }
  else {
    l2.next = mergeLists(l1, l2.next)
    return l2
  }
}

module.exports = mergeLists
