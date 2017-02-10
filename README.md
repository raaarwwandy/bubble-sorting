# Sorting Algorithms

Here are some of the five most commonly used Sorting Algorithms, and a briefe explenation on them. 

## Bubble Sort 
One of the slowest algorithms to use. It will continually compare each item in the array one by one until it has cleared the array with out having to do a swap. 
  * Big O notation: 	{\displaystyle O(n^{2})} O(n^{2})

### Kindergarten Explenation 
  - First you take the first number and see if its bigger than the number next to it. Go down the line until you find the number that comes before it or after it.  
  - Repeate the first step for each number in the line. 
  - Lastly check your list of numbers. If you can go through it with out having to make any changes you're done. 
  
### Psuedo Code
```sh 
$ let arr = [5,1, 4, 2, 8];

$function bubbleSort(arr){
  define array to be arranged 
  define swap as false 
  
  repeate while swap is false 
  for(iterate through the entire length of the array){
    if(checks to see if the first number is larger then the other){
      store the first value 
      change the first value to the second value 
      change the second value to the STORED value
      swap becomes true 
    }
  }
  
  while(swap must become true);
  return your array
};
``` 
