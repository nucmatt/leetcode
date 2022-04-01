// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// Example 1:

// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

// Example 2:

// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false

// Constraints:

//     2 <= coordinates.length <= 1000
//     coordinates[i].length == 2
//     -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
//     coordinates contains no duplicate point.

const checkStraightLine = (coordinates) => {
    // base cases
    if (coordinates.length === 2) return true;
    // define variables
    const xDiff = coordinates[1][0] - coordinates[0][0];
    const yDiff = coordinates[1][1] - coordinates[0][1];
    // logic
    // we can't use slope calculations because the coordinates can pass through 0s, making certain slope calculations divide by 0
    // we can use separate rise and run difference calculations between each point since the differences must always be the same to create a constant slope. This does involve cross-multiplication between the x and y point differences since the points given, while they have a linear relationship, do not have to be the same difference each time. i.e. [0,0], [1,1] is the same slope as [1,1], [5,5] even if the 1-0 !== 5-1
    for (let i = 2; i < coordinates.length; i++) {
        let currXDiff = coordinates[i][0] - coordinates[i-1][0];
        let currYDiff = coordinates[i][1] - coordinates[i-1][1];

        if (yDiff * currXDiff !== xDiff * currYDiff) return false;
    }
    // return statement
    // if the loop completes then all points have a linear coordinate difference and thus the line is a straight line
    return true;
}



console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]));
console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]));
console.log(checkStraightLine([[0,0],[0,1],[0,-1]]));
