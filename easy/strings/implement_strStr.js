const haystack1 = "hello";
const needle1 = "ll"; // 2
const haystack2 = "aaaaa";
const needle2 = "bba"; // -1
const haystack3 = "";
const needle3 = ""; // 0
const haystack4 = "mississippi";
const needle4 = "mississippi"; // 0

const strStr = (haystack, needle) => {
    // needle length > haystack length, return -1
    if (needle.length > haystack.length) return -1;
    // if needle is empty string, return 0
    if (needle.length === 0) return 0;
    // double pointer
        // first to loop through haystack
    for (i = 0; i <= haystack.length - needle.length; i++) {
        let j;
        // second to loop through needle if a match is found
        // as long as haystack[i] = needle[j], increment both
        for (j = 0; j < needle.length; j++) {
            if (haystack[i+j] !== needle[j]) {
                break
            }
        }
        // if end of needle reached, return index of initial match in haystack
        if (j === needle.length) {
            return i;
        }
    }
    // if no full match found, return -1
    return -1;
}

console.log(strStr(haystack1, needle1));
console.log(strStr(haystack2, needle2));
console.log(strStr(haystack3, needle3));
console.log(strStr(haystack4, needle4));
