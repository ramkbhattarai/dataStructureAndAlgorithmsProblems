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
console.log(mergeSort([1, 8, 9, 5, 3, 2, 4, 0, 6, 7]));

/**
 * RadixSort
 */
