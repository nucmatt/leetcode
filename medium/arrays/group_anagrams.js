// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// strs[i] consists of lowercase English letters.

// Note: I did not solve this myself. I tried an iterative solution and could not solve an infinite loop problem when trying to add a new array to the answers array.
const groupAnagrams = (strs) => {
    // create a new map. Remember that a map in Javascript is a special object where the keys can be any of any data type. Also remember each key must be unique.
    const map = new Map();
    // loop through the given strs array and sort each string into an anagram bucket(i.e. a map key/value pair);
    for (let str of strs) {
        // standardize the string by arranging the letters in alphabetical order
        const key = str.split('').sort().join('');
        // check if key already exists in map
        // if so add the string to the key's values
        if (map[key]) {
            map[key].push(str);
            // else create a new key as an array and add the string
        } else {
            map[key] = [str];
        }
    }
    return Object.values(map);
}


const strs1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']; // [["bat"],["nat","tan"],["ate","eat","tea"]]
const strs2 = ['']; // [[""]]
const strs3 = ['a']; // [["a"]]
console.log(groupAnagrams(strs1));
console.log(groupAnagrams(strs2));
console.log(groupAnagrams(strs3));

