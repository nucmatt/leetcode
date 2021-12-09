// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

const canConstruct = (ransomNote, magazine) => {
    // base cases
    if (!magazine || magazine.length < ransomNote.length) return false;
    // define variables
    const magazineMap = createHashMap(magazine);
    // logic
    // hash the magazine into a map
    // loop over the ransom note
    for (let char of ransomNote) {
        // if magazine map does not have letter or note has used all of that letter in map
        if (!magazineMap.has(char) || magazineMap.get(char) === 0) return false
            // return false
        // else decrement the letter value in the map by 1
        magazineMap.set(char, magazineMap.get(char) - 1);
    }
    // return statement
    // if the loop completes then magazine has all letters for note so return true
    return true;
}

// helper function to hash the magazine into a map
const createHashMap = (str) => {
    const map = new Map();

    for (let char of str) {
        map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
    }

    return map;
};
