// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

const levelOrder = (root) => {
    // base cases
    if (!root) return [];
    // define variables
    // a stack for the current tree level being evaluated, starting with the given root
    let currLevel = [root];
    // a queue for the next tree level to be evaluated(a queue is needed to handle edge cases where the tree level is not full, specifically where the left branch ends in a left leaf and the right branch ends in a right leaf)
    let nextLevel = [];
    // an array to hold the level order values
    const levelOrder = [];
    // and empty array to hold the current level's values
    let currVals = [];
    // a variable to contain the current node being evaluated
    let currNode;
    // logic
    // while there are nodes in the current level
    while (currLevel.length > 0) {
        // empty the current values array
        currVals = [];
        // while nodes are in the current level
        while (currLevel.length > 0) {
            // pop of a node from the current level to evaluate it
            currNode = currLevel.pop();
            // push the current node's value to the current values array
            currVals.push(currNode.val);
            // if the current node has a left node, push it to the array
            if (currNode.left !== null) nextLevel.unshift(currNode.left);
            // if the current node has a right node, push it to the array
            if (currNode.right !== null) nextLevel.unshift(currNode.right); 
            
        }
        // now the current level is empty so push current values to the level order array
        levelOrder.push(currVals);
        // move the current level to be the next level
        currLevel = nextLevel;
        // empty the next level
        nextLevel = [];
    }
    // return statement
    // once there are no more level to evaluate, return the level order array
    return levelOrder;
}
