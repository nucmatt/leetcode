// Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = (s) => {
    // base cases
    if (s.length === 0) return 0;
    // variables
    const map = new Map();
    let longest = 1;
    let substr = [];
    // logic
    for (char of s) {
        if (map.has(char)) {
            substr = substr.slice(substr.indexOf(char)+1);
        } 
        map.set(char, 1)
        substr.push(char);
        if (substr.length > longest) longest = substr.length;
    }
    // return
    return longest;
};

const str1 = "abcabcbb" // 3, abc
const str2 = "bbbbb" // 1, b
const str3 = "pwwkew" // 3, wke
const str4 = "au" // 1, au
const str5 = "tmmzuxt" // 5, mzuxt

console.log(lengthOfLongestSubstring(str1));
console.log(lengthOfLongestSubstring(str2));
console.log(lengthOfLongestSubstring(str3));
console.log(lengthOfLongestSubstring(str4));
console.log(lengthOfLongestSubstring(str5));
console.log(lengthOfLongestSubstring(""));
