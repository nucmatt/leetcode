// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

const deleteDuplicates = (head) => {
    // base cases
    if (!head) return head;
    // define variables
    // a pointer to the current node being evaluated
    let currNode = head;
    // logic
    // while the current and next nodes are not null
    while (currNode !== null && currNode.next !== null) {
        // if the next node's value equals the current node's value
        if (currNode.val === currNode.next.val) {
            // set the current nodes next value to point the next node's next node
            currNode.next = currNode.next.next;
            // else
        } else {
            // move the pointer up one node
            currNode = currNode.next;
        }
    }
    // return statement
    // return the head
    return head;
}
