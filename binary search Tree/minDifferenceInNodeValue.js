/**
 * Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
 */

var getMinimumDifference = function (root) {
    let ans = [];
    helper(root, ans);
    let sortedAns = ans.sort((a, b) => { return a - b });
    let result = Infinity;
    for (let i = 0; i < sortedAns.length - 1; i++) {
        let diff = sortedAns[i + 1] - sortedAns[i];
        if (diff < result) {
            result = diff;
        }
    }
    return result;
};

function helper(root, arr) {
    if (root) {
        let val = root.val;
        arr.push(val);
        helper(root.left, arr);
        helper(root.right, arr);
    }
}