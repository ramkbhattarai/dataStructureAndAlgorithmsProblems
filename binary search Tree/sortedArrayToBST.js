/**
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
 */

var sortedArrayToBST = function (nums) {
    if(nums.length === 0) return null;
    let mid = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[mid]);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid + 1);
    let leftNode = sortedArrayToBST(left);
    let rightNode = sortedArrayToBST(right);
    root.left = leftNode;
    root.right = rightNode;
    return root;

};