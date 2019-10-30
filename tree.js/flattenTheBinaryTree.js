/**
 * Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
 */

var flatten = function (root) {
    if (!root) return;
    if (root.left) {
        let last = root.left;
        while (last.right) last = last.right;
        let temp = root.right;
        root.right = root.left;
        last.right = temp;
        root.left = null;
    }
    flatten(root.right);
};