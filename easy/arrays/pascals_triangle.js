// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it

const generate = (numRows) => {
    // base cases
    // define variables
    const output = [[1]];
    // logic
    // create a for loop that terminates when output length = numRows
    while (output.length !== numRows) {
        // previous row is output[i]
        const prevRow = output[output.length - 1];
        // initialize current row as empty array
        const currRow = [];
        // while the row length is less than i + 1
        while(currRow.length < prevRow.length + 1) {
            // if row length = 0, push 1
            if (currRow.length === 0) {
                currRow.push(1);
                // else if row length = i, push 1
            } else if (currRow.length === prevRow.length) {
                currRow.push(1);
                // else push the result of previous row[current row length plus current row length - 1]
            } else {
                currRow.push(prevRow[currRow.length] + prevRow[currRow.length - 1]);
            }
        }
        // push the current row to the output array
        output.push(currRow);
    }
    // return statement
    return output;
}
