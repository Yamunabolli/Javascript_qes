function bubbleSort(arr) {
  let n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {  // Outer loop: Number of passes
    for (let j = 0; j < n - 1 - i; j++) {  // Inner loop: Comparing adjacent elements
      if (arr[j] > arr[j + 1]) {  // Swap if left > right
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
      }
    }
  }
  
  return arr;
}

console.log(bubbleSort([5, 12, 8, 130, 44])); 
// Output: [5, 8, 12, 44, 130]
