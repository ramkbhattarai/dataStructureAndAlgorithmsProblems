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

//   console.log(bubbleSort([1]));

  /**
   * Selection Sort
   */

   function selectionSort(arr){
       if (arr.length <= 1) return arr;

       for(let i = 0; i < arr.length; i++){
           let minIndex = i;
           for(let j = i+ 1; j < arr.length; j++){
               if(arr[minIndex] > arr[j]){
                   minIndex = j;
               }
           }

           swap(arr, minIndex, i);
        //    console.log(arr);
       }
       return arr;
   }

//    console.log(selectionSort([1,5,2,7,4,3,9,0]));

   /**
    * insertionSort
    */

    function insertionSort(arr){
        if (arr.length <= 1) return arr;

        for(let i = 1; i < arr.length; i++){
            let currEle = arr[i];
            let j = i-1;
            while (j >= 0 && arr[j] > currEle){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = currEle;
            // console.log(arr);

        }
        return arr;
    }

// console.log(insertionSort([1, 5, 2, 7, 4, 3, 9, 0]));


