var isValidBST = function(root) {
    //     null tree is valid BST
            if (!root) {
            return true
        }
        return isValidBranch(root, -Infinity, Infinity)
    
    };
        
    const isValidBranch = (node, min, max) => {
    //     null node is valid BST branch
        if (!node) {
            return true;
        }
    //     if min value is null and >= node value, not valid BST
        if (min !== null && min >= node.val) {
            return false;
        }
    //     if max value is null and <= node value, not valid BST
        if (max !== null && max <= node.val) {
            return false;
        }
    //     return left and right BST's, setting min value for left to node value and viceversa
        return isValidBranch(node.left, min, node.val) && isValidBranch(node.right, node.val, max); 
    }
