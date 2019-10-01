/**
 * implementQuickSort
 */
function quickSort(arr){
    if(arr.length <= 1) return arr;
    let pivot = arr.shift();
    let left = arr.filter(ele => ele < pivot);
    let right = arr.filter(ele => ele >= pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
}
// console.log(quickSort([1,8,9,5,3,2,4,0,6,7]));

/**
 * MergeSort
 */

 function mergeSort(arr){
     if (arr.length <= 1) return arr;

     let midIdx = Math.floor(arr.length /2);
     let left = arr.slice(0, midIdx);
     let right = arr.slice(midIdx);
     return merge(mergeSort(left), mergeSort(right));
 }

 function merge(left, right){
     let merged = [];
     while(left.length || right.length){
         let ele1 = left.length ? left[0] : Infinity; 
         let ele2  = right.length ? right[0] : Infinity;
         if(ele1 < ele2) {merged.push(left.shift());}
         else {merged.push(right.shift());}
     }
     return merged;
 }
// console.log(mergeSort([1, 8, 9, 5, 3, 2, 4, 0, 6, 7]));

/**
 * RadixSort
 */
 function getDigitFrom(num, place){
     return Math.floor(
        (Math.abs(num) / Math.pow(10, place)) % 10
     )
 }
  
//  function getIntLength(num){
//     //  let count = 0;
//     //  while(num){
//     //      num /= 10;
//     //      count++;
//     //  }
//     //  return count;
//     return String(num).length
//  }

 function getMaxDigits(nums){
     let maxDigits = 0;
     for(let i = 0; i < nums.length; i++){
        //  maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
        maxDigits = Math.max(maxDigits, String(nums[i]).length);
     }
     return maxDigits;
 }
 function radixSort(arr){
     if(!Array.isArray(arr)) return null;
     let maxDigits = getMaxDigits(arr);
     for(let i = 0; i < maxDigits; i++){
        //  let buckets = Array.from({length: 10}, () => []);
        let buckets = new Array(10).fill().map(() => []);
        for(let j = 0; j < arr.length; j++){
            let digit = getDigitFrom(arr[j], i);
            buckets[digit].push(arr[j]);
        }
        arr = [].concat(...buckets)
     }
     return arr;
 }

// console.log(radixSort([10, 8, 10, 5, 30, 2, 4, 19, 6, 7]));

/**
 * CountingSort
 */


 function countingSort(arr, max){
    let counter = new Array(max + 1).fill(0);
    for(let i = 0; i < arr.length; i++){
        counter[arr[i]] += 1;
    }
    let result = []
    for(let i = 0; i < counter.length; i++){
        while(counter[i] > 0){
            result.push(i);
            counter[i] -=1;
        }
    }
    return result;
 }
console.log(countingSort([10, 8, 10, 5, 30, 2, 4, 19, 6, 7], 30));
