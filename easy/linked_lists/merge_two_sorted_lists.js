/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	//     use dummy node
	let dummy = new ListNode(-1);
	//     store dummy reference in separate var, head, to return head.next, which will point to the beginning of the merged linked list
	let head = dummy;
	//     loop through lists until l1 or l2 is null
	while (l1 !== null && l2 !== null) {
		//         if l1 value is greater or equal, point dummy to current l1, advance l1 to next
		if (l1.val <= l2.val) {
			dummy.next = l1;
			l1 = l1.next;
			//         else point dummy to current l2, advance l2 to next
		} else {
			dummy.next = l2;
			l2 = l2.next;
		}
		//         advance dummy to next
		dummy = dummy.next;
	}
	//     once a null is reached, point dummy to non-null list pointer(l1 or l2)
	dummy.next = l1 ? l1 : l2;
	//     return next of dummy to point head pointer to start of merged list
	return head.next;
};

const mergeTwoLists2 = (list1, list2) => {
	// base cases
	if (!list2) return list1;
	// define variables
	// create a dummy node to start the list
	let dummyHead = new ListNode();
	// create a head variable to point to the dummyHead so the head of the new list can be returned
	const head = dummyHead;
	// logic
	// while list1 or list2 still has nodes
	while (list1 && list2) {
		// if the value of list1 node is less than list2 node's value
		if (list1.val <= list2.val) {
			// set the dummy head's next prop to be equal to the list1 node
			dummyHead.next = list1;
			// move the list1 head up 1 node
			list1 = list1.next;
			// else list2 node's value is less or equal to list1 node's value
		} else {
			// set the current node to be the list1 node
			dummyHead.next = list2;
			// move the list1 head up one node
			list2 = list2.next;
		}
		// move the dummy head up one node
		dummyHead = dummyHead.next;
	}
    // once the end of one list is reached, set the dummyHead's next to be the rest of the other list
    dummyHead.next = list1 ? list1 : list2;
	// return statement
	// return the dummy head's next node, which will be the start of the merged list
	return head.next;
};
