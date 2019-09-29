// Write a function, lucasNumberMemo(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578
function lucasNumberMemo(n, memo = {}) {
    if(n in memo) return memo[n];
   if(n === 0) return 2;
   if(n === 1) return 1;
    memo[n] =  lucasNumberMemo(n-1, memo) + lucasNumberMemo(n-2, memo);
   return memo[n];
}


// console.log(lucasNumberMemo(0))   // => 2
// console.log(lucasNumberMemo(1))   // => 1
// console.log(lucasNumberMemo(40))  // => 228826127
// console.log(lucasNumberMemo(41))  // => 370248451
// console.log(lucasNumberMemo(42))  // => 599074578


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// After you pass the first 3 examples, you'll likely need to memoize your code 
// in order to pass the 4th example in a decent runtime.
//
// Examples:
//  
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount, memo= {}) {
   if( amount in memo) return memo[amount];
   if(amount === 0) return 0;
   let possibleWaysToGIveCoins = [];
   coins.forEach((coin) => {
       if(coin <= amount){// this check is here so that it doesn't go in infinite loop
       // so that the amount doesn't go negative because we may have value of coin larger than amount

           possibleWaysToGIveCoins.push( minChange(coins, amount - coin, memo) + 1);
           // we want to collect all the possible ways to make a change and select 
           //  the minimum one
       }

   });
   memo[amount] = Math.min(...possibleWaysToGIveCoins); // min function works only on numbers
   // so we use splat operator to change it into numbers.
   return memo[amount];
}

console.log(minChange([1, 2, 5], 11))         // => 3, because 5 + 5 + 1 = 11
console.log(minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
console.log(minChange([1, 5, 10, 25], 15))    // => 2, because 10 + 5 = 15
console.log(minChange([1, 5, 10, 25], 100) )

