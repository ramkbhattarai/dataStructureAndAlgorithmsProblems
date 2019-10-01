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
console.log(quickSort([1,8,9,5,3,2,4,0,6,7]));


