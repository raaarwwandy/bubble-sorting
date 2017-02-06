/*jshint esversion:6 */

let arr = [10, 33, 2, 53, 4];

function inserstionSort(arr){
let previousPosition = '';
let valueToInsert = '';
  for(var i = 0; i < arr.length; i++){
    let valueToInsert = arr[i];
    //console.log('value to put in',valueToInsert);
    let previousPosition = i;
    //console.log('previousValue', previousPosition);
 
  }

  while( previousPosition >  0 && i[previousPosition-1] > valueToInsert)
    i[previousPosition] = i[previousPosition-1];
    console.log('checking previous position',i);
    previousPosition = previousPosition-1;
    console.log('checking', previousPosition);
}
  // return arr[previousPosition] = valueToInsert;

inserstionSort(arr);

module.exports = inserstionSort;