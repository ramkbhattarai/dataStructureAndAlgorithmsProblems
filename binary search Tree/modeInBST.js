/**
 * Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.


For example:
Given BST [1,null,2,2],

   1
    \
     2
    /
   2


return [2].

Note: If a tree has more than one mode, you can return them in any order.

Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
 */

var findMode = function (root) {
    let hash = new Map();
    let max = helper(root, hash);
    let ans = [];
    for (let [key, value] of hash) {
        if (value === max) {
            ans.push(key);
        }
    }
    return ans;
};

function helper(root, hash) {
    if (!root) return 0;
    let value = hash.has(root.val) ? hash.get(root.val) + 1 : 1;
    hash.set(root.val, value);

    return Math.max(
        value,
        helper(root.left, hash),
        helper(root.right, hash)
    )
}