// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.

// Example 1:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

// Example 2:

// Input: arr = [1,2]
// Output: 3
// Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.

// Example 3:

// Input: arr = [10,11,12]
// Output: 66

// Constraints:

//     1 <= arr.length <= 100
//     1 <= arr[i] <= 1000

const sumOddLengthSubarrays = (arr) => {
    // base cases
    if (arr.length === 1) return arr[0];
    // define variables
    let ans = 0;
    // logic
    // naive solution is for two loops, an inner loop and an outer loop
    // outer loop goes over array one item at a time
    for (let i = 0; i < arr.length; i++) {
        // add current index to ans
        ans += arr[i];
        // inner loop goes over array two at a time to create odd length subarrays
        for (let j = i + 2; j < arr.length; j += 2) {
            // reduce each subarray to a ans value and add to ans
            ans += arr.slice(i, j+1).reduce((total, num) => total + num);
        }
    }
    // return statement
    // once the outer loop completes, return the total
    return ans;
}

console.log(sumOddLengthSubarrays([1,4,2,5,3]));
console.log(sumOddLengthSubarrays([1,2]));
console.log(sumOddLengthSubarrays([10,11,12]));
