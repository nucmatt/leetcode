// There is a function signFunc(x) that returns:

//     1 if x is positive.
//     -1 if x is negative.
//     0 if x is equal to 0.

// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).

// Example 1:

// Input: nums = [-1,-2,-3,-4,3,2,1]
// Output: 1
// Explanation: The product of all values in the array is 144, and signFunc(144) = 1

// Example 2:

// Input: nums = [1,5,0,2,-3]
// Output: 0
// Explanation: The product of all values in the array is 0, and signFunc(0) = 0

// Example 3:

// Input: nums = [-1,1,-1,1,-1]
// Output: -1
// Explanation: The product of all values in the array is -1, and signFunc(-1) = -1

// Constraints:

//     1 <= nums.length <= 1000
//     -100 <= nums[i] <= 100

const arraySign = (nums) => {
    // base cases
    // define variables
    let sign = 1;
    // logic
    // We don't actually care about the product of the array, just the sign, so multiplication is not entirely necessary. 
    // loop over the array. If any number is a 0, immediately return 0. If the number is less than 0, multiply sign by -1. If number is > 0, do nothing. 
    for (const num of nums) {
        if (num === 0) return 0;

        if (num < 0) sign *= -1;
    }
    // return statement
    // once the loop completes, return sign
    return sign;
}

console.log(arraySign([-1,-2,-3,-4,3,2,1]));
console.log(arraySign([1,5,0,2,-3]));
console.log(arraySign([-1,1,-1,1,-1]));
