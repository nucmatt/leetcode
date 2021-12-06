// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

const matrixReshape = (mat, r, c) => {
    // base cases
    // if the provided matrix does not have enough values to fill the rows and columns, return the original matrix
    // first flatten the matrix array given
    const flatMatrix = mat.flat(Infinity);
    // if the flattened matrix length does not equal rows times columns, it is illegal
    if (flatMatrix.length !== (r * c)) return mat;
    // define variables
    // an array to hold the reshaped matrix
    const res = [];
    // logic
    while (flatMatrix.length > 0) {
        const row = flatMatrix.splice(0, c);
        res.push(row);
    }
    // return statement
    return res;
}
