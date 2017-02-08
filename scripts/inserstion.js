/*jshint esversion:6 */

let arr = [10, 33, 2, 53, 4];

function inserstionSort(arr){
  for(var i = 0; i < arr.length; i++){
    var key = arr[i];
    var j = i-1;

    while(j>=0 && arr[j] >key){
      arr[j+1] = arr; 
      j = j -1;
    }
    arr[j+1] = key;
  }

  return arr;
}
  // return arr[previousPosition] = valueToInsert;

console.log(inserstionSort(arr));

module.exports = inserstionSort;