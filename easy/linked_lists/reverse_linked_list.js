const head1 = [1,2,3,4,5]; // [5,4,3,2,1]
const head2 = [1,2]; // [2,1]
const head3 = []; // []

// This is an iterative solution submitted to LeetCode. It works because the LeetCode problems have built a linked list datastructure using classes. How the classes are specifically built is not revealed so solutions are trial and error for both my code and for how LeetCode built the classes.
var reverseList = function(head) {
    /** store values for previous head and next head */
    let previousValue = null;
    let nextValue = null;
    while(head) {
        /** save next node's value */
        nextValue = head.next;
        /** reverse next value of current head */
        head.next = previousValue;
        /** advance previous value and currentValue */
        previousValue = head;
        head = nextValue;
    }
    return previousValue;
};


// Below is a solution using an array since a linked list is not a build in Javascript data structure.
const reverseListArray = (head) => {
    if (head.length === 0) return head;
    // loop through list until i = length/2
    let end = head.length - 1;
    for (i = 0; i < head.length/2; i++) {
        // need to store two values from front and back of head list
        // back = front and front = back
        let temp = head[i];
        head[i] = head[end];
        head[end] = temp;
        // move up one from front and back one from end
        end--;
    }
    // once i <= head.length/2, return reversed list
    return head;
}

console.log(reverseListArray(head1));
console.log(reverseListArray(head2));
console.log(reverseListArray(head3));


const reverseList2 = (head) => {
    // base cases
    if (!head) return head;
    // define variables
    // a trailing pointer to track the previous node visited
    let prevNode = null;
    // a pointer to track the current node being reversed
    let currNode;
    // logic
    // while the head node is not null
    while (head !== null) {
        // move the current node pointer to the head
        currNode = head;
        // move the head up one node
        head = head.next;
        // set the current node's next value to point to the previous node
        currNode.next = prevNode;
        // move the previous node pointer up to the current node;
        prevNode = currNode;
    }
    // return statement
    // return prevNode, which will be the head of the reversed list
    return prevNode;
}

