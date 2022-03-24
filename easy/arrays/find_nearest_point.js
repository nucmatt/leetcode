// You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.

// Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location. If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.

// The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).

// Example 1:

// Input: x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]
// Output: 2
// Explanation: Of all the points, only [3,1], [2,4] and [4,4] are valid. Of the valid points, [2,4] and [4,4] have the smallest Manhattan distance from your current location, with a distance of 1. [2,4] has the smallest index, so return 2.

// Example 2:

// Input: x = 3, y = 4, points = [[3,4]]
// Output: 0
// Explanation: The answer is allowed to be on the same location as your current location.

// Example 3:

// Input: x = 3, y = 4, points = [[2,3]]
// Output: -1
// Explanation: There are no valid points.

const nearestValidPoint = (x,y,points) => {
    // base cases
    // define variables
    // the currently evaluated points
    let x1;
    let y1;
    // the manhattan distance
    let distance = Infinity;
    // the user story calls for returning -1 if no match
    let closestIndex = -1;
    // logic
    // we need to loop over the points array and check if the entry's x or y equals the provided x or y. 
    for (let i = 0; i < points.length; i++) {
        x1 = points[i][0];
        y1 = points[i][1];
        // if there is a match, calculate the manhattan distance of the other coordinate(we don't care about the matching coordinate, it will always be 0)
        if (x === x1 || y === y1) {
            // calculate current distance
            let currDistance = Math.abs((x - x1) + (y - y1));
            // if the current manhattan distance is less than the stored, set stored distance to be the current distance and closest index to the current index.
            if (currDistance < distance) {
                closestIndex = i;
                distance = currDistance;
            }
        }
    }
    // return statement
    // once the loop completes, return the closest index
    return closestIndex;
}

console.log(nearestValidPoint(3, 4, [[1,2],[3,1],[2,4],[2,3],[4,4]]));
console.log(nearestValidPoint(3, 4, [[3,4]]));
console.log(nearestValidPoint(3, 4, [[2,3]]));
