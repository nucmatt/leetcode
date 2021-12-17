// Given the root of a binary tree, return the preorder traversal of its nodes' values.
// Remember that preorder traversal is all the left branches of each node(starting with the root) are traversed down to the leaf, then the right branches are visited of each node are visited down to the leaf.

const preorderTraversal = (root) => {
    // base cases
    if (!root) return [];
    // define variables
    // an array to hold the values that are to be returned
    const preorderVals = [];
    // a stack to track unvisited nodes, starting with the root
    const stack = [root];
    // a current node variable to hold the current node being evaluated
    let currNode;
    // logic
    // while there is something in the stack to evaluate
    while (stack.length > 0) {
        // pop off the last node in the stack to examine it(i.e. current node)
        currNode = stack.pop();
        // push the current node's value to the values array
        preorderVals.push(currNode.val);
        // NOTE: The order is important here! We want to visit all left branches first down to the leaf, then start moving back up to examine right branches.
        // if the current node has a right node, push it to the stack
        if (currNode.right) stack.push(currNode.right);
        // if the current node has a left node, push it to the stack
        if (currNode.left) stack.push(currNode.left);
    }
    // return statement
    // return the values array once the stack is empty(i.e. the tree has been evaluated)
    return preorderVals;
}
