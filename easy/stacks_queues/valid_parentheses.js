// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

const isValid = (s) => {
    // base cases
    // if there is an odd number of characters, the parens cannot be closed properly
    if (s.length % 2 !== 0) return false;
    // define variables
    // a stack to hold the open parens found
    const stack = [];
    // a regex to match open parens
    const regex = /[({[]/;
    // logic
    // loop over the string
    for (let char of s) {
        // if the char is an open paren
        if (regex.test(char)) {
            // push it to the stack
            stack.push(char);
            // else
        } else {
            // pop off the last open paren from the stack and store it as currChar
            const currChar = stack.pop();
            // if char is ( and currChar is not ), return false
            if (char === ')' && currChar !== '(') return false;
            // if char is [ and currChar is not ], return false
            if (char === '}' && currChar !== '{') return false;
            // if char is { and currChar is not }, return false
            if (char === ']' && currChar !== '[') return false;
        }
    }
    // return statement
    // if loop completes and stack is empty return true, else return false (covers the case where more open parens than close parens)
    return stack.length === 0;
}
