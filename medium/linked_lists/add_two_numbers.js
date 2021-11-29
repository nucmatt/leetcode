class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	// push will simply add a new value to the end of the list.
	push(val) {
		if (val === undefined) return this;
		// First we have to create a new node using the value passed to push
		let node = new ListNode(val);
		// if the list in empty then both the head AND tail will be the newly created node.
		// NOTE: since you are adding to the end of the list, the next properties do not have to be set. A newly created node automatically has a null value for it's next property.
		if (this.head === null) {
			this.head = node;
			this.tail = node;
			// else the new node is added to the end of the list and becomes the new tail
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		// Adding a value to the list obviously lengthens the list so we must increment the length property of this list instance.
		this.length++;
		// You have to return the list out of the function to reform the list. Since this is a class method all you have to refer to when returning is 'this', meaning this instance of SinglyLinkedList
		return this;
	}
}
const createSLL = (arr) => {
	const dataArr = arr;
	const list = new SinglyLinkedList();
	while (dataArr.length > 0) {
		list.push(dataArr.shift());
	}
	return list;
};

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

const addTwoNumbers = (l1, l2) => {
	// base cases
	if (!l2) return l1;
	// define variables
	const num1 = listToNum(l1);
	const num2 = listToNum(l2);
	let sum = num1 + num2;
	// digits place for each number pushed to the list
	let place = 1;
	// logic
	// convert lists to numbers
	// add numbers together
	// convert sum to list
	const sumList = new SinglyLinkedList();
	do {
		const remainder = sum % Math.pow(10, place);
		sumList.push(remainder / Math.pow(10, place - 1));
		place++;
		sum -= remainder;
	} while (sum > 0);
	// return the sum as a list
	return sumList;
};

const listToNum = (list) => {
	// the number the list represents
	let num = 0;
	// the order of magnitude of each number in the list
	let place = 1;
	let currNode = list.head;
	// loop through list
	while (currNode !== null) {
		let currNum = currNode.val * place;
		num += currNum;
		currNode = currNode.next;
		place *= 10;
	}
	return num;
};
const arr1 = [2, 4, 3];
const arr2 = [5, 6, 4];
const arr3 = [0];
const arr4 = [0];
const arr5 = [9, 9, 9, 9, 9, 9, 9];
const arr6 = [9, 9, 9, 9];
const l1 = createSLL(arr1);
const l2 = createSLL(arr2);
const l3 = createSLL(arr3);
const l4 = createSLL(arr4);
const l5 = createSLL(arr5);
const l6 = createSLL(arr6);

// console.log(addTwoNumbers(l1,l2));
// console.log(addTwoNumbers(l3,l4));
// console.log(addTwoNumbers(l5,l6));

// This solution is for LeetCode's "definition" of a singly linked list data structure using only the LinkNode class
const addTwoNumbersLeet = (l1, l2) => {
	// base cases
	if (!l2) return l1;
	// define variables
	// this is just a dummy head because Leetcode refuses to define a usable linked list structure
	const ans = new ListNode();
	// keep track of the current node of the answer list 
	let currNode = ans,
	// a carry value is tracked since each node can only have 1 digit
		carry = 0;
	// logic
	// while either list has nodes remaining or there is a carry from the previous calculation
	while (l1 || l2 || carry) {
		// grab the numbers from the provided lists. Values are set to 0 if the end of the one list is reached before the other.
		let val1 = l1 ? l1.val : 0;
		let val2 = l2 ? l2.val : 0;
		let sum = val1 + val2 + carry;
		// set the next of the current node to be a new node with the ones digit of the sum as it's value
		currNode.next = new ListNode(sum % 10);
		// move the l1 and l2 nodes forward one node unless null
		if (l1) l1 = l1.next;
		if (l2) l2 = l2.next;
		// carry will either be a 0 or a 1 depending on sum's value
		carry = (sum >= 10) ? 1 : 0;
		// move the current node for the answer forward one node
		currNode = currNode.next;
	}
	// return the dummy nodes next value to return the start of the list
	return ans.next;
};
