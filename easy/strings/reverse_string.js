const s1 = ['h', 'e', 'l', 'l', 'o']; // ans = ['o', 'l', 'l', 'e', 'h']
const s2 = ['H', 'a', 'n', 'n', 'a', 'h']; // ans = ['h', 'a', 'n', 'n', 'a', 'H']

const reverseString = (s) => {
    // must modify in place
    const halfLength = Math.floor(s.length / 2);
    const endIndex = s.length - 1;
    // iterate through first half of array
    for (i = 0; i < halfLength; i++) {
        let temp = s[i];
        s[i] = s[endIndex - i];
        s[endIndex - i] = temp;    
    }
    return s;
        // grab first letter and last letter
        // set first to last and last to first
        // repeat for each pair until i = s.length/2 rounded down
        // return modified array
}

console.log(reverseString(s1));
console.log(reverseString(s2));
