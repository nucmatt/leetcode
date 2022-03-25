// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

// Example 1:

// Input: arr = [3,5,1]
// Output: true
// Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

// Example 2:

// Input: arr = [1,2,4]
// Output: false
// Explanation: There is no way to reorder the elements to obtain an arithmetic progression.

// Constraints:

//     2 <= arr.length <= 1000
//     -106 <= arr[i] <= 106

const canMakeArithmeticProgression = (arr) => {
	// base cases
	// constraints allow for a length 2 array, which is automatically a valid progression
	if (arr.length === 2) return true;
	// define variables
	arr.sort((a, b) => a - b);
	const diff = arr[0] - arr[1];
	// logic
	// Straightforward solution is to just sort the array, then loop over the array and verify that each difference with the next number is the same as the first difference. You have to sort first to make sure you have the correct progression.
	for (let i = 1; i < arr.length - 1; i++) {
		console.log(arr[i] - arr[i + 1]);
		if (arr[i] - arr[i + 1] !== diff) return false;
	}
	// return statement
	// return true if the loop completes
	return true;
};

console.log(canMakeArithmeticProgression([3, 5, 1]));
console.log(canMakeArithmeticProgression([1, 2, 4]));
console.log(canMakeArithmeticProgression([-68, -96, -12, -40, 16]));
