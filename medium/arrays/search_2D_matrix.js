// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

//     Integers in each row are sorted from left to right.
//     The first integer of each row is greater than the last integer of the previous row.

const searchMatrix = (matrix, target) => {
	// base cases
	// define variables
	let row;
	// logic
	// loop through matrix starting at the last row
	for (let i = matrix.length - 1; i >= 0; i--) {
		// set row to the current index of the matrix
		row = matrix[i];
		// if the first term in the row is less or equal to target
		if (row[0] <= target) {
			// loop through row
			for (let num of row) {
				// if target found return true
				if (num === target) return true;
			}
			// if target not found, return false
			return false;
		}
	}
	// return statement
	// if loop completes then target is not in matrix so return false
    return false;
};
