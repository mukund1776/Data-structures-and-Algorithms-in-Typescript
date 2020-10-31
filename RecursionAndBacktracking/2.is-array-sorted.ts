// Write a recursive program to check if array is sorted.

function isArraySortedHelper(arr: number[], length: number) {
  if (length <= 1) {
    return true;
  }
  return arr[length - 1] > arr[length - 2] && isArraySortedHelper(arr, length - 1);
}

function isArraySorted(arr: number[]) {
  return isArraySortedHelper(arr, arr.length);
}


console.log('Tests..');
const array1 = [1, 2, 3, 4, 5];
console.log(array1, isArraySorted(array1));
const array2 = [1];
console.log(array2, isArraySorted(array2));
const array3 = [1, 3, 2, 4, 5];
console.log(array3, isArraySorted(array3));
const array4 = [6, 1, 2, 3, 4, 5];
console.log(array4, isArraySorted(array4));
