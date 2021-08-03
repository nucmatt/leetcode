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

console.log(firstUniqChar(s1));
console.log(firstUniqChar(s2));
console.log(firstUniqChar(s3));
