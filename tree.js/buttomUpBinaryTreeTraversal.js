/**
 * Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
 */

 function traversal(root){
     if(!root) return [];
     let ans = [];
     let queue = [root];
     while(queue.length){
         let sub = [];
         let size = queue.length;
         for(let i = 0; i< size; i++){
             let node = queue.shift();
             if(node.left) queue.push(node.left);
             if(node.right) queue.push(node.right);
             sub.push(node.val);
         }
         ans.push(sub);
     }
     return ans.reverse();
 }