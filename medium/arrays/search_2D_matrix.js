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

const searchMatrixBinary = (matrix, target) => {
	// base cases
	// define variables
	// loop through rows, starting with last row
	for (let i = matrix.length - 1; i >= 0; i--) {
		// set row to the current index of the matrix
		row = matrix[i];
		if (row[0] === target) return true;
		// if first number in row is less than target
		if (row[0] < target) {
			// return result of binary search of the row
			let start = 0;
			let end = row.length - 1;
			let midpoint;
			// move through the array
			while (start <= end) {
				midpoint = Math.floor((start + end) / 2);
				// if midpoint value equals val
				// return midpoint
				if (row[midpoint] === target) return true;
				// if arr value is < val
				if (row[midpoint] < target) {
					// discard lower half of arr
					start = midpoint + 1;
				}
				// if arr value is > val
				if (row[midpoint] > target) {
					// discard upper half of arr
					end = midpoint - 1;
				}
			}
			// return -1 if val not found
			return false;
		}
	}
	// return statement
	return false;
};
