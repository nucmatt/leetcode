// This solution uses recursion and is a depth-first strategy.
var maxDepth = function(root) {
    if (!root) {
        return 0
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// Another solution is a breadth-first strategy involving using an array as a queue. I will implement this later but it is a less-efficient strategy.
