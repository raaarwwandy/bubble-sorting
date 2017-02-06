/* jshint esversion:6 */

let arr = [10, 1, 2, 1, 4, 100, 60, 3, 5];

function mergeSort(arr){
  let middle = Math.floor(arr.length/2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  
  if(arr.length < 2){
    return arr;
  }

   left = mergeSort(left);
   right = mergeSort(right);
   return compare(left, right);
}

function compare(left, right){
  let result = [];

  while( left.length !== 0 && right.length !== 0)
    if(left[0] > right[0]){
    result.push(right.shift());
  } else {
    result.push(left.shift());
  }
    return result.concat(left.slice().concat(right.slice()));
}


  
console.log(mergeSort(arr));

module.exports = mergeSort;