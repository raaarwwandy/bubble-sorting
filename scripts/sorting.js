let myArray = [ 5, 1, 4, 2, 8];

function bubbleSort(arr){
  let n = arr;
  
  let swap = false;
  do{
    swap = false;
    for(var i = 0; i < n.length; i++){
      if(n[i] > n[i+1]){
        temp = n[i];
        n[i] = n[i+1];
        n[i+1] = temp;
        swap = true;
      }
    }
  }

  while(swap === true); 
  return n; 
};

console.log(bubbleSort(myArray));

module.exports = bubbleSort;