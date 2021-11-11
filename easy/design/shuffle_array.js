// Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

// Implement the Solution class:

//     Solution(int[] nums) Initializes the object with the integer array nums.
//     int[] reset() Resets the array to its original configuration and returns it.
//     int[] shuffle() Returns a random shuffling of the array.

class Solution {
	constructor(nums) {
		this.original = nums;
		// a copy of nums is needed so the spread operator is used. Otherwise this.original turns into an empty array. I'm not sure why this happens.
		this.nums = [...nums];
	}

	reset() {
		// resetting nums to the original array is necessary to actually reset the object created from the Solution class, otherwise you are just showing what the original array was.
		//Not a big deal for the problem but if you were shuffling something and needed to compare with the original, resetting and then comparing would create an undesired result.
		this.nums = [...this.original];
		return this.nums;
	}

	// shuffle uses the computer version of the Fisher-Yates shuffle.
	shuffle() {
		// You count down from the length of the array so that each successive shuffle ONLY shuffles the part of the array that has not already been shuffled. This reduces the time complexity from O(n^2) to O(n) by preventing repeated swaps (I think).
		for (let i = this.nums.length - 1; i > 0; i--) {
			// one is added to i to ensure you select an index to swap that is between 0 and the last unswapped index. Otherwise you wouldn't be able to randomly select the last unswapped item(i.e. leave it in place), preventing an equal chance of each permutation.
			const swapIdx = Math.floor(Math.random() * (i+1));
			[this.nums[i], this.nums[swapIdx]] = [this.nums[swapIdx], this.nums[i]];
		}
		return this.nums;
	}
};

const solution = new Solution([1, 2, 3]);

console.log(solution);
console.log(solution.reset());
console.log(solution.shuffle());
// console.log(solution.shuffle());
// console.log(solution.shuffle());
console.log(solution.reset());
