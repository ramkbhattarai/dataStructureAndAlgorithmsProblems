/**
 * Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
 */

 function isSame(p, q){
     if(!p && !q) return true; // if both nodes are null they are equal
     if(!p || !q) return false; // if either of one is null they are not equal, condition
     // to check both are equal is already checked.
     if(p.val !== q.val) return false;

     return isSame(p.left, q.left) && isSame(p.right, q.right);
 }

 /**
  * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3


But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
  */

var isSymmetric = function (root) {
    return isMirror(root, root);
};

function isMirror(a, b) {
    if (!a && !b) return true;
    if (!a || !b) return false;
    return (a.val === b.val) && isMirror(a.left, b.right) && isMirror(a.right, b.left);
}