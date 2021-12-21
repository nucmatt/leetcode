// Given the root of a binary tree, return the postorder traversal of its nodes' values.
// Remember that postorder is (left, right, root)

const postorderTraversal = (root) => {
    // base cases
    if (!root) return [];
    // define variables
    // a stack to hold seen nodes
    const stack = [];
    // an array to hold postorder values
    const postorderVals = [];
    // a current root node, initialized to the given root of the tree
    let currRoot = root;
    //  a previous root variable for walking back up the tree once the left most leaf is found
    let prevRoot = null;
    // logic
    // while the current root is not null or there is something in the stack
    while (currRoot !== null || stack.length > 0) {
        // traverse down the leftmost side of the tree until the leaf is reached, adding the right node (if present) and then the current root to the stack
        while (currRoot !== null ) {
            if (currRoot.right !== null) stack.push(currRoot.right);
            stack.push(currRoot);
            currRoot = currRoot.left;
        }
        // when you have reached the end of the left most branch, pop off the last node added as the current root
        currRoot = stack.pop();
        // set the previously seen node to equal what is now the last node in the stack
        prevNode = stack[stack.length - 1];
        // if the current root's right node and the previously seen node match
        if (currRoot.right === prevNode) {
            // remove the previously seen node from the stack
            stack.pop();
            // push the current root onto the stack
            stack.push(currRoot);
            // move the current root to the right branch of the current root
            currRoot = currRoot.right;
            // else we are at the end of the currently seen branch
        } else {
            // push the current root's value onto the postorder array
            postorderVals.push(currRoot.val);
            // set the current root to null since everything in this branch has been evaluated already
            currRoot = null;
        }
    }
    // return statement
    // once there are not more roots and the stack is empty, return the postorder array
    return postorderVals;
}
