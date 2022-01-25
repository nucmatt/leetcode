// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:

// Input: root = [1,2,2,null,3,null,3]
// Output: false

const isSymmetric = (root) => {
    // base cases
    // define variables
    // queue to hold nodes to be evaluated
    const queue = [root];
    // array to hold values of current level
    let currValues = [];
    // value to track size of the current level
    let currLevelSize;
    // current node being evaluated
    let currNode;
    // logic
    // while there are nodes left to evaluate
    while (queue.length > 0) {
        // set current level size to be the current length of the queue
        currLevelSize = queue.length;
        // while nodes are left at the current level
        while (currLevelSize > 0) {
            // shift off a node from the queue
            currNode = queue.shift();
            // if left node, push left to queue
            if (currNode.left) {
                queue.push(currNode.left);
                 // push left value to array (even if value is null)
                currValues.push(currNode.left.val);
            } else {
                currValues.push(null);
            }
            // if right node, push right to queue
            if (currNode.right) {
                queue.push(currNode.right);
                 // push right value to array (even if value is null)
                currValues.push(currNode.right.val);
            } else {
                currValues.push(null);
            }
            currLevelSize--;
        }
        // evaluate array of current values for symmetry (helper function?)
        if (symmetricHelper(currValues)) {
            // if array is symmetrical so reset the array to empty
            currValues = [];
            // if not symmetrical, return false
        } else {
            return false;
        }
    }
    // return statement
    // if the outer while loop completes, the tree is symmetrical so return true
    return true;
}

const symmetricHelper = (arr) => {
    // left and right pointers
    let left = 0;
    let right = arr.length - 1;
    // while left pointer is less than right pointer
    while (left < right) {
        // compare left and right values in the array
        // if not equal, return false
        if (arr[left] !== arr[right]) return false;
        // else move left pointer up and right pointer back one
        left++;
        right--;
    }
    // if loop completes then all values are equal so return true
    return true;
}
