// Given a string s, return the longest palindromic substring in s.

const longestPalindrome = (s) => {
    // base cases
    if (s.length < 2) return s;
    // define variables
    // longest seen palindrome
    let longestPal = s[0];
    // current string being checked
    let currStr = '';
    // logic
    // two nested loops to see each substring within s
    // loop i is left pointer
    for (let i = 0; i < s.length; i++) {
        // loop j is right pointer
        for (let j = i; j < s.length; j++) {
            currStr = s.substring(i, j + 1);
            console.log(currStr)
            if (isPalindrome(currStr)) {
                longestPal = (currStr.length > longestPal.length) ? currStr : longestPal;
            }
        }
    }
    // return
    return longestPal;
};

const isPalindrome = (s) => {
    // base cases
    // define variables
    let start = 0;
    let end = s.length - 1;
    // logic
    // using two pointers, loop through string until pointers meet
    while (start < end) {
        // if start and end chars are not equal, return false
        if (s[start] !== s[end]) return false;
        // else move start up one and end back one
        start++;
        end--;
    }
    // return
    return true;
}

const s1 = "babad"; // bab or aba
const s2 = "cbbd"; // bb
const s3 = "a"; // a
const s4 = "ac"; // a
const s5 = "bb"; // bb

console.log(longestPalindrome(s1));
console.log(longestPalindrome(s2));
console.log(longestPalindrome(s3));
console.log(longestPalindrome(s4));
console.log(longestPalindrome(s5));
