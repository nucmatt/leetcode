const s1 = "leetcode" // 0
const s2 = "loveleetcode" // 2
const s3 = "aabb"; // -1

const firstUniqChar = (s) => {
    // loop through first half of string
    for (i = 0; i < s.length; i++) {
        // grab character at index i
        let match = s[i];
        if(s.indexOf(match) === s.lastIndexOf(match)) {
            return i
        } 
    }
    return -1;
        // check if character is in rest of string
        // if not, return i
    // if all characters are repeated, return -1
}

// The dual conditionals make the runtime faster because lastIndex of has to go through ALL instances of the character to find the last, where as just using indexOf and starting after the currect characters index only needs to find the next instance, if any.
const firstUniqCharOptimized = (s) => {
    for (i = 0; i < s.length; i++) {
        let match = s[i];
        if(s.indexOf(match) === i && s.indexOf(match, i + 1) === -1) {
            return i
        } 
    }
    return -1;
};

console.log(firstUniqChar(s1));
console.log(firstUniqChar(s2));
console.log(firstUniqChar(s3));
