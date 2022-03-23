// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21

// Constraints:

//     1 <= n <= 10^5

const subtractProductAndSum = (n) => {
    // base cases
    // define variables
    let product = 1;
    let sum = 0;
    let remainder;
    // logic
    // we need to examine each digit in the integer independently and accumulate each digit to a product and a sum. To look at each digit, create a loop that finds the remainder of n / 10, applies the remainder to the product and sum variables, then subract the remainder from the integer and divide the integer by 10. This will move you to the next digit in n. Do this until n is <= 1.
    while (n >= 1) {
        remainder = n % 10;
        product *= remainder;
        sum += remainder;
        n -= remainder;
        n /= 10;
    }
    // return statement
    return product - sum;
}

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));
console.log(subtractProductAndSum(101));
