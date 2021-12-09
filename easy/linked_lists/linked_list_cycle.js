// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

const hasCycle = (head) => {
	// base cases
	if (head === null) return false;
	// define variables
	// a set to contain each seen node since each node should only be seen once
	const set = new Set();
	let currNode = head;
	// logic
	// loop through list while current node next is not null
	while (currNode.next !== null) {
		// if the set has the current node, return true
		if (set.has(currNode)) return true;
		// if set does not have the node, add the node to the set
		set.add(currNode);
		// move current node up one node
		currNode = currNode.next;
	}
	// return statements
	// if the loop completes then the end of the list has been found so no cycle
	return false;
};

const hasCycleFloyds = (head) => {
	// base cases
	if (head === null) return false;
	// define variables
	// two pointers
	let tortoise = head,
		hare = head;
	// logic
	// while hare and hare's next is not null (both are needed to prevent a runtime error for no next property)
	while (hare !== null && hare.next !== null) {
		// tortoise moves 1, hare moves 2
		tortoise = tortoise.next;
		hare = hare.next.next;
		// if tortoise === hare, return true
		if (tortoise === hare) return true;
	}
	// return statement
	// if the loop completes then a null has been reach so no cycle
	return false;
};
