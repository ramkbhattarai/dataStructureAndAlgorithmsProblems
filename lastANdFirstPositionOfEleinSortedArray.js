/**
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
 */


 // we use binary search algorithm for log(n) time complexity in helper function
var searchRange = function (nums, target) {
    let ans = [-1, -1];
    let left = helper(nums, target, true);
    if (left === nums.length || nums[left] !== target) {
        return ans;
    }
    ans[0] = left;
    ans[1] = helper(nums, target, false) - 1;
    return ans;
};

function helper(nums, target, boolean) {
    let low = 0;
    let high = nums.length;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (target < nums[mid] || boolean && (nums[mid] === target)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}