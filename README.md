# Sorting Algorithms

Here are some of the five most commonly used Sorting Algorithms, and a briefe explenation on them. 

## Bubble Sort 
One of the slowest algorithms to use. It will continually compare each item in the array one by one until it has cleared the array with out having to do a swap. 
  * Big O notation: O(n<sup>2</sup>)
  * Best Case : Small arrays, and some what presorted.
  * Worst Case : Large array to sort through

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
## QuickSort 
QuickSort is somewhat faster than bubble sort. It looks for a pivot point, typically a number in the middle of the array. Using that pivot point it will further subdevide the array into two smaller arrays, one array containing numbers smaller than the pivot point and another array containing numbers larger than the pivot point. It will further sort through each smaller arrays so they're in order and then remerge them once its completed. 
  * Big O notation: O(n)
  * Best Case Scenario: Is when your partitions are easily balanced with the pivot point being a number that can be used amongst both arrays. 
  * Worst Case Scenario: Is an uneven blanaced partiton and your pivot point being the first or last numnber in the array. 
 
 ### Kindergarten Explenation 
   - First pick a number in the middle of your list.
   - Compare the remaining numbers in the list. Make a pile for any number that is less then that middle number or one pile that is greater then that middle number. 
   - then sort through the two individual lists and making sure they're in order. 
   - combine them all together to make your sorted list. 

### Psuedo code
```s
function mergeSort(array){
  middle declare your middle point
  left = delcare a empty array for your low values
  right declare an empty arrayf or your large values
  
   if( declare your base case making sure that your arrays lenght is 0){
   return array
   }
  
  for(go through your entire array){
   if(compare the current value if its either less than your pivot point){
    if it is then push it into your left array;
    } else {
    push it to your right array;
   }
    recursively sort through both arrays until you hit your base case 
  }  
    return left concat pivot and concat right
 }
```
## Merge Sort 
Merg sort further breaks down an array down to a single object. it then starts comparing each object in pairs and slowly merges them into a larger array. 
  * Big O notation: O(n log n)
  * Best Case Scenario: 
  * Worst Case Scenario: 
