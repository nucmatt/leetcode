// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

//     Each row must contain the digits 1-9 without repetition.
//     Each column must contain the digits 1-9 without repetition.
//     Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:

//     A Sudoku board (partially filled) could be valid but is not necessarily solvable.
//     Only the filled cells need to be validated according to the mentioned rules.

const isValidSudoku = (board) => {
	// base cases
	// define variables
	// a map to contain all the seen digits and their positions
	const map = new Map();
	// logic
	// loop through rows
	for (let i = 0; i < board.length; i++) {
		// loop through columns
		for (let j = 0; j < board[i].length; j++) {
			// if [i][j] is a period(per given problem rules) continue to next square
			let squareVal = board[i][j];
			if (squareVal === '.') {
				continue;
			}
			// else [i][j] is a digit so:
			// record position of current square
			const currSquare = position(i, j);
			// check if the map has the digit
			if (map.has(squareVal)) {
				// if so check if existing digit has same row, column, or subgrid
				for (square of map.get(squareVal)) {
					if (
						square.row === currSquare.row ||
						square.col === currSquare.col ||
						square.subgrid === currSquare.subgrid
					) {
                        // if yes return false
						return false;
					}
				}
                // if not, push current square onto map array
                map.get(squareVal).push(currSquare);
			} else {
                map.set(squareVal, [currSquare]);
            }
			// else, since [i][j] is valid
			// add object with row, column, and subgrid to digit values
		}
	}
	// return statement
    return true;
};

// helper function to create object for row, column, and subgrid
const position = (row, col) => {
	const subgrid = calcSubgrid(row, col);
	const square = { row: row, col: col, subgrid: subgrid };
	return square;
};
// helper function to determine subgrid
const calcSubgrid = (row, col) => {
	// subgrids are labelled left to right, top to bottom, 1 - 9
	return Math.floor(row / 3) * 3 + Math.floor(col / 3);
};
