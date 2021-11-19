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
        const newNode = new ListNode(dataArr.pop());
        list.push(newNode);
    }
    return list;
}

const arr1 = [3,4,2];
const arr2 = [4,6,5];
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
