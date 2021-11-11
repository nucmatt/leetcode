const s1 = "42"; // 42
const s2 = "    -42"; // -42
const s3 = "4193 with words"; // 4193
const s4 = "words and 987" // 0
const s5 = "-91283472332"; // -2147483648
const s6 = "    -88827   5655  U"; // -88827
const s7 = "21474836460" // 2147483647

// whitespace to begin/end string is discarded
// string must start with +/-/0-9
// if string starts with anything but above, output is 0
// output must be a number
// output stops after last consecutive number from start of string
// output clamped to -2^31 <= x <= 2^31

const myAtoi = (s) => {
    // trim whitespace from start of string
    let string = s.trim();
    const signRegex = /[+-]/;
    const numberRegex = /\d/;
    let i = 0; 
    let ans; 
    // check first character of string for +/-/0-9
    if (!numberRegex.test(string[0]) && !signRegex.test(string[0])) {
        return 0;
    }

    if (signRegex.test(string[0])) {
        i++;
    }
    // loop through string
    while(numberRegex.test(string[i])) {
        // if character after i = 0 is number, continue to next index
        i++;
    }
    // once non-number character reached, slice off rest of string
    // convert string to number
    // clamp answer to -2^31 <= x <= 2^31
    ans = clamp(+string.slice(0, i), -2147483648, 2147483647);
    return isNaN(ans) ? 0 : ans;
}

function clamp(num, min, max) {
    return num <= min 
      ? min 
      : num >= max 
        ? max 
        : num
  }

console.log(myAtoi(s1));
console.log(myAtoi(s2));
console.log(myAtoi(s3));
console.log(myAtoi(s4));
console.log(myAtoi(s5));
console.log(myAtoi(s6));
console.log(myAtoi(s7));
