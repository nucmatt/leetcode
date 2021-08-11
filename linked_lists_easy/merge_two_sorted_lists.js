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
 var mergeTwoLists = function(l1, l2) {
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
