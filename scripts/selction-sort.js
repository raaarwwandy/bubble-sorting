/*jshint esversion:6 */

let arr = [10, 33, 2, 53, 4];

function slectionSort(arr){

  let max = arr.length;
  console.log(max);

  for(var i = 0; i < max; i++){
    let key = arr[i];
    let keyj = i;

    for(var j = i+1; j < max; j++){
      if(arr[j] < key){
        key = arr[j];
        keyj = j;
      }
    }

    arr[keyj] = arr[i];
    arr[i] = key;
  }

  return arr;
}

console.log(slectionSort(arr));

module.exports = slectionSort;
