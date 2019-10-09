/**
 * Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
 */

var binaryTreePaths = function (root) {
    let ans = [];
    if (root) searchPath(root, "", ans);
    return ans;

};

function searchPath(root, path, arr) {
    if (!root.left && !root.right) arr.push(path + root.val);
    if (root.left) searchPath(root.left, path + root.val + '->', arr);
    if (root.right) searchPath(root.right, path + root.val + '->', arr);
}