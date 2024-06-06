function hasSubarraySum(arr, target) {
    let currSum = 0;
    let start = 0;
    for (let end = 0; end < arr.length; end++) {
      currSum += arr[end];
        while (currSum > target) {
        currSum -= arr[start];
        start++;
      }
        if (currSum === target) {
        return true;
      }
    }
      return false;
  }