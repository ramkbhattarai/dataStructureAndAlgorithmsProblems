/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
 */

var levelOrder = function (root) {
    if (!root) return [];
    let ans = [];
    let q = [root];
    while (q.length) {
        let level = q.length; // this is the idea to get the elements to include
        let temp = [];

        for (let i = 0; i < level; i++) {
            let peek = q[0];
            if (peek.left) q.push(peek.left);
            if (peek.right) q.push(peek.right);
            let node = q.shift();
            temp.push(node.val);
        }
        ans.push(temp)
    }
    return ans;
};

/**
 * Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example, given a 3-ary tree:
     1
   / \ \
  3  2   4
    /  \  
   5   6   

We should return its level order traversal:

[
     [1],
     [3,2,4],
     [5,6]
]
 */

/**
* // Definition for a Node.
* function Node(val,children) {
*    this.val = val;
*    this.children = children;
* };
*/
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let ans = [];
    let q = [root];
    while (q.length) {
        let level = q.length;
        let temp = [];
        for (let i = 0; i < level; i++) {
            let peek = q[0];
            if (peek.children.length) q.push(...peek.children);
            temp.push(q.shift().val)
        }
        ans.push(temp);
    }
    return ans;
};