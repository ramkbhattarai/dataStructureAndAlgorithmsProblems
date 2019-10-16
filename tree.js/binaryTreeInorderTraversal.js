/**
 * Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
 */

 function inorderTraversalRecur(root){
     let ans = [];
     helper(root, ans);
     return ans;
 }

 function helper(root, arr){
     if(root){
         if(root.left){
             helper(root.left, arr);
         }
         arr.push(root.value);
         if(root.right){
             helper(root.right, arr);
         }
     }
 }

 function inorderTraversalITER(root){
     let curr = root;
     let ans = [];
     let stack = [];
     while(curr || stack.length){
         while(curr){
             stack.push(curr);
             curr = curr.left;
         }
        curr = stack.pop();
        ans.push(curr.val);
        curr = curr.right;
     }
     return ans;
 }