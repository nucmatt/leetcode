// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

//     Starting with any positive integer, replace the number by the sum of the squares of its digits.
//     Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
//     Those numbers for which this process ends in 1 are happy.

// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// Example 2:

// Input: n = 2
// Output: false

// Constraints:

//     1 <= n <= 231 - 1

const isHappy = (n) => {
	// base cases
	// define variables
	const hashTable = new Set();
	// We need to split the number into individual digits, then add the squares of those digits together. For cleaner logic and separation of concerns, we can break this calculation out into it's own function.
	let ans = happyCalc(n);
	// logic
	while (!hashTable.has(ans)) {
		// if that sum equals 1 return true
		if (ans === 1) return true;
		// else add the sum as an entry to the hash table
		hashTable.add(ans);
		// and do a happy calculation on the current ans
		ans = happyCalc(ans);
	}
	// return statement
	// the loop breaks if the hashTable has the ans, so return false since we dont have a happy number
	return false;
};

const happyCalc = (num) => {
	let remainder;
	let sum = 0;
	while (num >= 1) {
		remainder = num % 10;
		sum += remainder * remainder;
		num = Math.floor(num / 10);
	}
	return sum;
};

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));
console.log(isHappy(1111111));
