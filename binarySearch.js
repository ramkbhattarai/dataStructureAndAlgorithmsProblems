/**
 * Binary Search
 *  This can only be used in sorted array.
 */

 function binarySearch(arr, target){
     if(arr.length === 0) return false;
     let midIdx = Math.floor(arr.length / 2);
      let left = arr.slice(0, midIdx);
      let right = arr.slice(midIdx + 1);

      if(target === arr[midIdx]){
          return true;
      }else if(target < arr[midIdx]){
        return binarySearch(left, target);
      }else{
          return binarySearch(right, target);
      }
 } 
//  console.log(binarySearch([1,2,3,4,5,6,7,8,9], 9))
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0))

 /**
  * Using Binary Search to return index;
  */

  function binarySearchIndex(arr, target){
      let low = 0;
      let high = arr.length - 1;
      while(low <= high){
          let mid = Math.floor((low + high) / 2);
          if(target < arr[mid]){
              high = mid -1;
          }else if(target > arr[mid]){
              low = mid + 1;
          }else{
              return mid;
          }
      }
      return -1;
  }

// console.log(binarySearchIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 9))
// console.log(binarySearchIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 0))

