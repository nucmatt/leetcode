// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
const isPalindrome = (s) => {
    // remove all non-alphanumeric chars from string and convert to lower case
    // the regex W is for all non-alphanumeric chars EXCEPT the underscore so the underscore has to be added separately.
    const str = s.replace(/[_\W+]/g, "").toLowerCase();
    // base cases
    if (str === "") return true;
    // define variables
    let start = 0;
    let end = str.length - 1;
    console.log(str, start, end)
    // logic
    // using two pointers, loop through string until pointers meet
    while (start < end) {
        // if start and end chars are not equal, return false
        if (str[start] !== str[end]) return false;
        // else move start up one and end back one
        start++;
        end--;
    }
    // return
    return true;
};

const s1 = "A man, a plan, a canal: Panama"; // true
const s2 = "raceacar"; // false
const s3 = "  "; // true
const s4 = "ab_a"; // true

console.log(isPalindrome(s1));
console.log(isPalindrome(s2));
console.log(isPalindrome(s3));
console.log(isPalindrome(s4));
