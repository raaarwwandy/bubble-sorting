/*jshint esversion:6 */

let arr = [10, 33, 2, 53, 4];



function quickSort(arr){
 let pivot = arr[0];
 let left = [];
 let right = [];

 if(arr.length === 0){
  return arr;
 }

 for(var i = 1; i < arr.length; i++){
  if(arr[i] < pivot){
    left.push(arr[i]);
  } else{
    right.push(arr[i]);
  }
  quickSort(left);
  quickSort(right);
 }
  return left.concat(pivot, right);
  
}

console.log(quickSort(arr));


module.exports= quickSort; 