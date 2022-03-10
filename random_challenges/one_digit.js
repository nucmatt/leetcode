const oneDigit = (int) => {
    // base cases
    // define variables
    // store integer in another variable so we don't modify it accidentally
    let num = int;
    // declare a remainder variable for arithmatic operations
    let remainder;
    // logic
    // process is to examine each digit by first finding the 1 ones digit using remainder for dividing by 10. If the number or remainder are a 1, then we have a ones digit. If not then subtract the remainder from num and divide the result by 10.
    // while num is greater than 1(when num is < 1 we have examined the entire integer)
    while (num >= 1) {
        remainder = num % 10;
        if (num === 1 || remainder === 1) return true;
        num -= remainder;
        num /= 10;
    }
    return false
}

console.log(oneDigit(417));
console.log(oneDigit(100));
console.log(oneDigit(22));
console.log(oneDigit(1));
console.log(oneDigit(3401));
