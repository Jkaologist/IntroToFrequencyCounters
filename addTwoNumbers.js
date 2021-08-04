/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const ListNode = require("./listNode")

function addTwoNumbers(l1, l2) {
  let node = null
  const carry = arguments[2]
  if (l1 || l2) {
      const val1 = l1 ? l1.val : 0
      const val2 = l2 ? l2.val : 0
      const next1 = l1 ? l1.next : null
      const next2 = l2 ? l2.next : null
      const val = carry ? val1 + val2 + 1 : val1 + val2
      node = new ListNode(val % 10)
      node.next = addTwoNumbers(next1, next2, val >= 10)
  } else if (carry) {
      node = new ListNode(1)
      node.next = null
  }
  return node
}

// function addTwoNumbers(l1, l2) {
//   let sum = 0;
//   let current = new ListNode(0);
//   let result = current;

//   while (l1 || l2) {
//     if (l1) {
//       sum += l1.val;
//       l1 = l1.next;
//     }

//     if (l2) {
//       sum += l2.val;
//       l2 = l2.next;
//     }

//     current.next = new ListNode(sum % 10);
//     current = current.next;

//     sum = sum > 9 ? 1 : 0;
//   }

//   if (sum) {
//     current.next = new ListNode(sum);
//   }
//   console.log(result)
//   return result.next;
// }

// function addTwoNumbers(l1, l2) {
//   let dummyHead = new ListNode(0)
//   let curr = dummyHead
//   let carry = 0
//   let x
//   let y
//   let sum
//   while (l1 || l2) {
//     x = l1 ? l1.val : 0
//     y = l2 ? l2.val : 0 
//     sum = carry + x + y
//     carry = sum / 10
//     curr.next = new ListNode(sum % 10)
//     curr = curr.next
//     if (l1) {
//       l1 = l1.next
//     }
//     if (l2) {
//       l2 = l2.next
//     }
//   }
//   if (carry > 0) { 
//     curr.next = new ListNode(carry)
//   }
//   return dummyHead.next
// }

module.exports = addTwoNumbers
