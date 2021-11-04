// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Brute force solution is to just add up each possible subarray and return the largest sum found. Time complexity O(n^2).


// The solution below uses Kadane's algorithm to achieve a time complexity O(n).
// see the following links for useful explanations/visuals of how Kadane's algorithm works:
// https://en.wikipedia.org/wiki/Maximum_subarray_problem
// https://favtutor.com/blogs/kadanes-algorithm-python
// https://coduber.com/kadanes-algorithm-maximum-sum-subarray-problem/
const maxSubArray = (nums) => {
	// base cases
    // Computer Science convention is that the sum of an empty array is 0.
	if (nums.length === 0) return 0;
	if (nums.length === 1) return nums[0];
	// define variables
    // maxSum is the max sum of a seen subarray
	let maxSum = -Infinity,
    // currSum is the sum of the current subarray
		currSum = 0;
	// logic
    // loop through the given array, nums
	for (let i = 0; i < nums.length; i++) {
        // add the current index value to the current subarray
        currSum += nums[i];
        // if current index value is greater than the current sum of the subarray, reset the subarray to be start at the current index
        // this has the effect of moving the start of the current subarray to the current index(i.e. the new maximum subarray is currently only this index value)
		if (nums[i] > currSum) {
            currSum = nums[i];
		}
        // if the sum of the current subarray is greater than the largest sum seen so far, then a new maximum subarray has been found
        // this has the effect of moving the end of the maximum subarray to the current index
		if (currSum > maxSum) {
			maxSum = currSum;
		}
	}
	// return max sum
	return maxSum;
};

const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // 6, [4,-1,2,1]
const nums2 = [1]; // 1
const nums3 = [5, 4, -1, 7, 8]; // 23

console.log(maxSubArray(nums1));
console.log(maxSubArray(nums2));
console.log(maxSubArray(nums3));
