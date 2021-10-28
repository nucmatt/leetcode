
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//   @param {TreeNode} root
//   @return {number[][]}
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// My solution. Overly complex but still fairly efficient per LeetCode. It uses a modified breadth first search with two alternating queues.
// runtime: 76ms / 86.29%
// mem use: 40.5MB / 59.08%
const levelOrder = (root) => {
    // base cases
    if (!root) return [];
    // define variables
    const queue1 = [];
    const queue2 = [];
    const output = [];
    let currLevel = [];
    let currNode = root;
    // add root node to queue1
    queue1.push(currNode);
    // while something is in either queue
    while (queue1.length > 0 || queue2.length > 0) {
        // dequeue nodes from q1 until empty
        while (queue1.length > 0) {
            currNode = queue1.shift();
            // push current node's value to current level array
            currLevel.push(currNode.val);
            // add left and right nodes to queue2, if there
            if (currNode.left !== null) queue2.push(currNode.left);
            if (currNode.right !== null) queue2.push(currNode.right);
        }
        // push current level vals to output and reset to empty
        if (currLevel.length > 0) output.push(currLevel);
        currLevel = [];
        // dequeue nodes from queue 2 until empty
        while (queue2.length > 0) {
            currNode = queue2.shift();
            // push current node's value to current level array
            currLevel.push(currNode.val);
            // add left and right nodes to queue 1, if there
            if (currNode.left !== null) queue1.push(currNode.left);
            if (currNode.right !== null) queue1.push(currNode.right);
        }
        // push current level vals to output and reset to empty
        if (currLevel.length > 0) output.push(currLevel);
        currLevel = [];
    }
    // return output
    return output;
};
 
// A top solution in the comments. Uses breadth first search while limiting the number of nodes pulled from the queue to each levels number of nodes. Interestingly has the same runtime and mem use values as my solution.
 const levelOrder2 = (root) => {
    //  base cases
    if (!root) return [];
    // define variables
    const queue = [];
    const output = [];
    let currNode = root;
    // enqueue the root
    queue.push(currNode);
    // while something is in the queue
    while (queue.length > 0) {
        // store the current tree level size
        const levelSize = queue.length;
        // create an array to hold the values of the current tree level
        const levelVals = [];
        // dequeue nodes for the current level, storing the values and adding each node's children to the queue
        for (let i = 0; i < levelSize; i++) {
            currNode = queue.shift();
            levelVals.push(currNode.val);
            if (currNode.left !== null) queue.push(currNode.left);
            if (currNode.right !== null) queue.push(currNode.right);
        }
        output.push(levelVals);
    };
    // return output
    return output;
};
