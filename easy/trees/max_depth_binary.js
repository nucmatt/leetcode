// This solution uses recursion and is a depth-first strategy.
var maxDepth = function(root) {
    if (!root) {
        return 0
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// Another solution is a breadth-first strategy involving using an array as a queue. I will implement this later but it is a less-efficient strategy.

// NOTE: You have to use a queue for the nodes to be tracked properly. A stack will leave nodes from two different levels on the tree for certain unbalanced binary trees.
const maxDepth = (root) => {
	// base cases
	if (!root) return 0;
	// define variables
	// queue to hold nodes to be evaluated
	const queue = [root];
	// variable to track max depth
	let maxDepth = 0;
	// current queue length to track number of nodes on current level
	let currLength;
	// current node to be evaluated
	let currNode;
	// logic
	// while there is something in the queue
	while (queue.length > 0) {
		// set the current length to be queue length
		currLength = queue.length;
		// increase max depth by one since we are evaluating a tree level
		maxDepth++;
		// while there are still nodes on the current level to evaluate
		while (currLength > 0) {
			// pop of the next node to be evaluated
			currNode = queue.shift();
			// if the current node has a left value, add it to the queue
			if (currNode.left) queue.push(currNode.left);
			// if the current node has a right value, add it to the queue
			if (currNode.right) queue.push(currNode.right);
			// decrement the current length by one
			currLength--;
		}
	}
	// return statement
	// return the max depth of the tree
	return maxDepth;
};
