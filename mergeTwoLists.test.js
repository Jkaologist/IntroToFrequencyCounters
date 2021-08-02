const ListNode = require("./listNode");
const mergeTwoLists = require("./mergeTwoLists");

let l1 = [
  new ListNode(1, 2),
  new ListNode(2, 4),
  new ListNode(4, 9),
  new ListNode(9),
];
let l2 = [
  new ListNode(1, 3), 
  new ListNode(3, 4), 
  new ListNode(4)];
let l3 = [
  new ListNode(1, 1),
  new ListNode(1, 2),
  new ListNode(2, 3),
  new ListNode(3, 4),
  new ListNode(4, 4),
  new ListNode(4, 9),
  new ListNode(9)
];

test("returns a singly linked list of the two merged", () => {
  expect(mergeTwoLists(l1, l2)).toStrictEqual(l3);
});
