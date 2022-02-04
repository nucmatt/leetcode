// Given the root of a binary tree, invert the tree, and return its root.

const invertTree = (root) => {
    // base cases
    // define variables
    // a queue to hold unexamined nodes
    const queue = [root];
    // a current node to be evaluated
    let currNode = null;
    // logic
    // while there are nodes to evaluated
    while (queue.length > 0) {
        // shift off the first node in the queue
        currNode = queue.shift();
        // swap the left and right nodes if the node is not null
        if (currNode !== null) {
            // use destructuring syntax to swap the left and right nodes
            [currNode.left, currNode.right] = [currNode.right, currNode.left];
            // push the left, then the right node to the queue
            queue.push(currNode.left, currNode.right);
        }
    }
    // return statement
    // once the loop completes, the tree is inverted so return the root
    return root;
}
