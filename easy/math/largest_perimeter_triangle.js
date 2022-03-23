// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

// Example 1:

// Input: nums = [2,1,2]
// Output: 5

// Example 2:

// Input: nums = [1,2,1]
// Output: 0

// Constraints:

//     3 <= nums.length <= 10^4
//     1 <= nums[i] <= 10^6

const largestPerimeter = (nums) => {
	// base cases
	// define variables
	let sideA;
	let sideB;
	let sideC;
	// logic
	// all triangles require that the sum of the lengths of the two shorter sides must be greater than the length of the third side(Triangle Inequality Theorem 1).
	// first we should sort the nums array lowest to highest
	nums.sort((a, b) => a - b);
	// pop off the two largest values and set them equal to sideA and sideB, in that order
	sideA = nums.pop();
	sideB = nums.pop();
	// while there are still numbers in the nums array
	while (nums.length > 0) {
		// pop off a number from the nums array and set it equal to side C
		sideC = nums.pop();
		// console.log(sideA, sideB, sideC);
		// if sideA equals sideB return the sum of the sides. We can do this because the array is sorted so sideC has to be equal to or less than both sides.
		// if sideB plus SideC >= SideA, return the sum of the sides as the triangle satisfies Triangle Inequality Theorem 1.
		if (sideB + sideC > sideA) {
			return sideA + sideB + sideC;
		}
		// if we haven't formed a triangle set sideA equal to sideB and then sideB equal to sideC. Now the loop will go again to check the next number as sideC
        [sideA, sideB] = [sideB, sideC];
        // console.log(sideA, sideB, sideC);
	}

	// return statement
	// if the loop completes then we have not formed a triangle
    return 0;
};

const largestPerimeter2 = (nums) => {
	// base cases
	// define variables
	// logic
	// all triangles require that the sum of the lengths of the two shorter sides must be greater than the length of the third side(Triangle Inequality Theorem 1).
	// first we should sort the nums array highest to lowest
	nums.sort((a, b) => b - a);

    // loop over the array from start to finish
    for (let i = 0; i + 2 < nums.length; i++) {
        // check to see if nums[i+1] + nums[i+2] > nums[i]
        if (nums[i] < nums[i+1] + nums[i+2]) {
            // if so return the sum of those three numbers
            return nums[i] + nums[i+1] + nums[i+2]
        }
    }
	// return statement
	// if the loop completes then we have not formed a triangle
    return 0;
};

console.log(largestPerimeter([2, 1, 2]));
console.log(largestPerimeter([2, 1, 3, 4]));
console.log(largestPerimeter([2, 1, 1]));
console.log(largestPerimeter([2, 1, 1, 3]));
