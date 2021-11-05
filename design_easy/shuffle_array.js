// Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

// Implement the Solution class:

//     Solution(int[] nums) Initializes the object with the integer array nums.
//     int[] reset() Resets the array to its original configuration and returns it.
//     int[] shuffle() Returns a random shuffling of the array.

class Solution {
    constructor (nums) {
        this.original = nums;
        // a copy of nums is needed so the spread operator is used. Otherwise this.original turns into an empty array. I'm not sure why this happens.
        this.nums = [...nums];
    }

    reset() {
        return this.original;
    }

    shuffle() {
         let newArr = [];
         while (this.nums.length > 0) {
            //  create a random number between 0 and the length of nums array
             let randIdx = Math.floor(Math.random() * this.nums.length);
            //  push the random index above from nums to the new array, removing that index from nums in the process
            let val = this.nums.splice(randIdx, 1);
            newArr.push(val[0]);
         }
        //  returning the new array directly leaves this.nums as an empty array since splice overwrites the original array
        this.nums = newArr;
        return this.nums;
    }
}

const solution = new Solution([1,2,3]);

console.log(solution);
console.log(solution.shuffle());
console.log(solution.shuffle());
console.log(solution.shuffle());
console.log(solution.shuffle());
console.log(solution.reset());
