/**
 * Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
 */

var minDepth = function (root) {
    if (!root) return 0;
    let depth = 1;
    let queue = [root];
    while (queue.length - 1) {
        let size = queue.length - 1;
        while (size >= 0) {
            let node = queue.shift();
            if (!node.left && !node.right) return depth;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            size--;
        }
        depth++;
    }
    return depth;

    // below is the recursive method which I haven't well understood.

    //     if(!root.left || !root.right)
    //     return Math.max(minDepth(root.left), minDepth(root.right)) + 1;

    //     return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

