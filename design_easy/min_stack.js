// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

//     MinStack() initializes the stack object.
//     void push(int val) pushes the element val onto the stack.
//     void pop() removes the element on the top of the stack.
//     int top() gets the top element of the stack.
//     int getMin() retrieves the minimum element in the stack.
//     Methods pop, top and getMin operations will always be called on non-empty stacks.

// Remember that stacks are LIFO data structures.
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class MinStack {
	constructor() {
		this.first = null;
		this.min = null;
	}

	push(val) {
		// create a new node
		const newNode = new Node(val);

		// if the stack is empty then the top and min is the new node
		if (this.first === null) {
			this.first = newNode;
			this.min = newNode.val;
			// else the new node is the top node and the minimum value MAY change
		} else {
			// store the old top node
			const oldTopNode = this.first;
			// the new node is the top node, so the old top is now new node's next
			newNode.next = oldTopNode;
			// once the old top node is connected to the new node, set the top node to be the new node
			this.first = newNode;

			// if the new node's value is lower than the current minimum value, set the minimum value to the new node's value
			if (newNode.val < this.min) {
				this.min = newNode.val;
			}
		}
	}

	pop() {
		// store the top node so it's values can be manipulated safely
		const poppedNode = this.first;
		// set the top property of the stack to be the removed node's next node
		this.first = poppedNode.next;
		// if the node to be removed is also the minimum value, a new minimum value must be found and set
		if (poppedNode.val === this.min) {
			// find the new minimum value
			// if there is no next node, the minimum value is null
			if (this.first === null) {
				this.min === null;
				// else loop through the stack to find the minimum value
			} else {
				let nextNode = this.first;
				this.min = nextNode.val;
				while (nextNode !== null) {
					if (nextNode.val < this.min) this.min = nextNode.val;
					nextNode = nextNode.next;
				}
			}
		}
		// break the connection between the removed node and the remaining stack
		poppedNode.next = null;
		// return the value of the removed node
		return poppedNode.val;
	}

	top() {
		return this.first.val;
	}

	getMin() {
		return this.min;
	}
}

const stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.getMin());
console.log(stack.pop());
console.log(stack.top());
console.log(stack);
console.log(stack.getMin());
