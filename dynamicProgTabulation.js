// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end


function stepper(nums) {

    let checker = new Array(nums.length).fill(false);
    checker[0] = true;
   for(let i = 0; i < nums.length; i++ ){

        if(checker[i]){ 
            let range = nums[i]+i+1; // here i+1 is the new position so our range should be value plus that position
            for(let j = i + 1; ((j < range) && (j < checker.length)); j++){
                checker[j] = true;
            }
        }
        console.log(checker);
   }
   return checker[checker.length -1];
}
// console.log(" ans = "+stepper([1,2,0,3,0]))

// function stepper(nums, memo={}) {
//     let key = String(nums.length);
//     if(key in memo) return memo[key];
//    if(nums.length === 0) return true;
//    let maxRange = nums[0];
//    for(let step = 1; step <= maxRange; step++){
//        if(stepper(nums.slice(step), memo)) {
//            memo[key] = true;
//            return true;
//         }
//    }
//    memo[key] = false;
//    return false;
// }
//  console.log("ans = "+stepper([1, 2, 0, 3, 0]))

// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6 
// function maxNonAdjacentSum(nums) {
//   let table = new Array(nums.length).fill(0);
//   table[0] = nums[0];
//   for(let i = 1; i < table.length; i++){
//       let skipAdjacentElement = table[i-2] === undefined ? 0 : table[i-2];
//       // this is the max sum of the elements without adjecent neighbors
//       let including = skipAdjacentElement + nums[i]; // now include the current element
//       let excluding = table[i-1]; // max sum upto next element
//       table[i] = Math.max(including, excluding); // now we need max sum so we compare
//       // the max between them
//   }
//   return table[table.length -1];
// }


function maxNonAdjacentSum(nums, memo = {}) {
    let key = String(nums.length);
    if(key in memo) return memo[key];
   if(nums.length === 0) return 0;

   let first = nums[0];
   let  including = first + maxNonAdjacentSum(nums.slice(2));
   let excluding  = maxNonAdjacentSum(nums.slice(1));
   memo[key] =  Math.max(including, excluding);
   return memo[key];
}

// console.log(maxNonAdjacentSum([4, 2, 1, 6]));

// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100



function minChange(coins, amount, memo = {}) {
    if(amount in memo) return memo[amount]
    if(amount === 0) return 0;
    let ans = [];
    coins.forEach(coin => {
        if(coin <= amount){

            ans.push(minChange(coins, amount - coin, memo)+1);
        }
    })
    
    memo[amount] = Math.min(...ans);
    return memo[amount];
}


// console.log(minChange([1, 2, 5], 11))         // => 3, because 5 + 5 + 1 = 11
// console.log(minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// console.log(minChange([1, 5, 10, 25], 15) )   // => 2, because 10 + 5 = 15
// console.log(minChange([1, 5, 10, 25], 100) )  // => 4, because 25 + 25 + 25 + 25 = 100


/**
 * You are given coins of different denominations and a total amount of money.
 *  Write a function to compute the number of combinations that make up that amount.
 *  You may assume that you have infinite number of each kind of coin.



Example 1:

Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
Example 3:

Input: amount = 10, coins = [10]
Output: 1


Note:

You can assume that

0 <= amount <= 5000
1 <= coin <= 5000
the number of coins is less than 500
the answer is guaranteed to fit into signed 32-bit integer
 */

 function combinations(coins, amount, memo = {}){
     let key = coins + '_' + amount;
     if(key in memo) return memo[key];
     if(amount === 0) return 1;
     let currentCoin = coins[coins.length - 1];
     let total = 0;
     for(let qty = 0; qty * currentCoin <= amount; qty++){
        total += combinations(coins.slice(0,-1), amount - qty * currentCoin, memo);
     }
     memo[key] =  total;
     return memo[key];
 } 

 /**
  * Given a m x n grid filled with non-negative numbers,
  *  find a path from top left to bottom right which minimizes the sum of all numbers
  *  along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
  */


  function minSum (arr){
      let m = arr.length;
      let n = arr[0].length;
    let table = new Array(m).fill().map(() => new Array(n).fill(Infinity));
    // this is tabulation and we fill each box with infinity so that any number 
    // that fill will be less than that;
    table[0][0] = arr[0][0];
    for(let i = 0; i < m; i++){
        for(let j =0; j < n; j++){
           if(j < n-1) table[i][j + 1] = Math.min(table[i][j]+ arr[i][j+1],table[i][j+1]);
           if (i < m-1) table[i+1][j] = Math.min(table[i][j] + arr[i+1][j], table[i+1][j]);

        }
    }
    return table[m-1][n-1];
  }

  /**
   * You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
   */

   function climbingStairs(n){
            // there are two ways to climb stairs
            //1. 1 step from step[i-1]
            // 2. 2 steps from step[i-2]

            let step = [];
            step[0] = 1;
            step[1] = 1;
            for(let i = 2; i <= n; i++){
                step[i] = step[i-1]+step[i-2];
            }
            return step[n];
   }