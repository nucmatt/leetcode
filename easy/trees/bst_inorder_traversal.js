// Given the root of a binary tree, return the inorder traversal of its nodes' values.
// Remember, inorder traversal will return nodes in increasing order (in the case of BSTs)

const inorderTraversal = (root) => {
    // base cases
    if (!root) return [];
    // define variables
    // an array to hold the inorder values of the tree
    const inorderVals = [];
    // a stack to hold nodes to be visited
    const stack = [];
    // a current node set to the root of the tree
    let currNode = root;
    // logic
    // while the current node is not null OR there is something in the stack
    while (currNode !== null || stack.length > 0) {
        // if the current node is null
        if (currNode === null) {
            // pop a node of the stack and store as the current node
            currNode = stack.pop();
            // push the current node's value to the values array
            inorderVals.push(currNode.val);
            // set the current node to the current node's right prop
            currNode = currNode.right;
        // else the current node has a value
        } else {
            // push the current node to the stack
            stack.push(currNode);
            // set the current node to be the current node's left prop
            currNode = currNode.left;
        }
    }
    // return statement
    // once there are no more nodes to visit (i.e. the stack is empty) return the inorder values array
    return inorderVals;
}
