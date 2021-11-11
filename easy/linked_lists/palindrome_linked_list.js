// the solution below uses Floyd's Cycle Finding algorithm to find the center of the linked list.

var isPalindrome = function(head) {
    let hare = head;
    let tortoise = head;
//     Find the middle node
    while(hare && hare.next) {
        tortoise = tortoise.next;
        hare = hare.next.next;
    }
//     move hare back to head
    hare = head;
//     reverse the second half of the list(tortoise)
    tortoise = reverseList(tortoise);
//     compare head values for head and tortoise
    while(tortoise) {
        if (hare.val !== tortoise.val) {
            return false;
        }
        hare = hare.next;
        tortoise = tortoise.next;
    }
    return true;
};

const reverseList = (head) => {
    let previousNode = null;
    let nextNode = null;
    
    while(head) {
        nextNode = head.next;
        head.next = previousNode;
        previousNode = head;
        head = nextNode;
    }
    
    return previousNode;
}
// I'm not sure why the below doesn't work within LeetCode.
var isPalindrome = function(head) {
    //     reverse the head list and store the reversed list
        let reversed = reverseList(head);
    // while values are equal, advance the pointer on each list
        while (head !== null) {
    //         if both pointers return null, return true
            if (head.val !== reversed.val) {
                return false;
            }
            head = head.next;
            reversed = reversed.next;
        }
    // if values stop being equal return false
        return true;
    };
    
    const reverseList = (head) => {
        let previousNode = null;
        let nextNode = null;
        
        while(head) {
            nextNode = head.next;
            head.next = previousNode;
            previousNode = head;
            head = nextNode;
        }
        
        return previousNode;
    }
