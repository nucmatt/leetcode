// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

const removeElements = (head, val) => {
	// base cases
	if (!head) return head;
	// create variables
	// a pointer to point to the current not
	let currNode;
	// logic
	// while head is not null and head's value equals the target value
	while (head !== null && head.val === val) {
		// move head forward one node
		head = head.next;
	}
	// set current node to be the head node(so we can walk through the list)
	currNode = head;
	// while the current node and current node's next value are not null
	while (currNode !== null && currNode.next !== null) {
		// if the next node's value equals the target value
        if (currNode.next.val === val) {
            // move the current node's next value up to skip this node
            currNode.next = currNode.next.next;
        } else {
            // else move the current node up one node;
            currNode = currNode.next;
        }
	}
	// return statement
	// return the head
    return head;
};
