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
}

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
	} while (sum > 0)
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
		currNode = currNode.next
		place *= 10;
	}
	return num;
}
const arr1 = [2,4,3];
const arr2 = [5,6,4];
const arr3 = [0];
const arr4 = [0];
const arr5 = [9,9,9,9,9,9,9];
const arr6 = [9,9,9,9];
const l1 = createSLL(arr1);
const l2 = createSLL(arr2);
const l3 = createSLL(arr3);
const l4 = createSLL(arr4);
const l5 = createSLL(arr5);
const l6 = createSLL(arr6);

console.log(addTwoNumbers(l1,l2));
console.log(addTwoNumbers(l3,l4));
console.log(addTwoNumbers(l5,l6));
