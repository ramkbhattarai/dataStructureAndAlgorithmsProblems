/**
 * implement bubble sort
 */

 function bubbleSort(arr){
    if(arr.length <= 1) return arr;
     let sorted = false;
     while(!sorted){
         sorted = true;
         for(let i = 0; i<arr.length; i++){
             if(arr[i] > arr[i+1]){
                 swap(arr,i,i+1);
                 sorted = false;
             }
         }
        
     }
     return arr;
 }
  function swap(arr, i ,j){
      let temp  = arr[i];
      arr[i]  = arr[j];
      arr[j] = temp
  }

  console.log(bubbleSort([1]));

  