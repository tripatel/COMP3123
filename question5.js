function array_max_sum(arr, k) {
    let max_sum = 0;
  
    // Initial sum of first 'k' elements
    for (let i = 0; i < k; i++) {
      max_sum += arr[i];
    }
  
    let current_sum = max_sum;
  
    // Slide through the array
    for (let i = k; i < arr.length; i++) {
      current_sum += arr[i] - arr[i - k];
      max_sum = Math.max(max_sum, current_sum);
    }
  
    return max_sum;
  }
  
  console.log(array_max_sum([1, 2, 3, 14, 5], 2)); 
  console.log(array_max_sum([2, 3, 5, 1, 6], 3));  
  console.log(array_max_sum([9, 3, 5, 1, 7], 2));  