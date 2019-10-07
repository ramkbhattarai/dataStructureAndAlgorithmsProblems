/**
 * Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
 */

 function invertTree(root){
     if(!root) return null;
     let oldleft = invertTree(root.left);
     let oldRight = invertTree(root.right);
     root.left = oldRight;
     root.right = oldleft;
     return root;
 }