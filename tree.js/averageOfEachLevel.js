/**
 * Given a non-empty binary tree, return the average value of the nodes on each level
 *  in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11.
 Hence return [3, 14.5, 11].
 */
var averageOfLevels = function (root) {
    let queue = [root];
    let ans = [];
    while (queue.length) {
        let size = queue.length;
        let sub = []
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            sub.push(node.val)
        }
        // console.log(sub);
        ans.push(avg(sub))
    }
    return ans;
};

function avg(arr) {
    let sum = 0;
    arr.forEach(ele => sum += ele);
    return sum / arr.length;

}