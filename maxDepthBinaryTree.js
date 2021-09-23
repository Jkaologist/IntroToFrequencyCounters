/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root, count = 0) {
   // return the val of count if you reach a node that does not exist
    if (TreeNode.val === null) {
      return 0
    }
    count ++
    // return the maximum between the recursive calls of all the left nodes and right nodes
    return Math.max(maxDepth(root.left, count), maxDepth(root.right, count))
};