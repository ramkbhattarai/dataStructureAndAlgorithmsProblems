// Given a Singly Linked List, write a function that reverses the order of the
// list's nodes.
//
// Note: You are guaranteed not to receive a linked list with cycles as input.
//
// ------------
// Constraints:
// ------------ 
//
// (1) Your function must run in linear time, O(n).
// (2) You must reverse the list *in place*. (i.e. Use constant space, O(1).)
// ------------
// Explanation:
// ------------
//
// Given the following linked list:
//
//   First → Second → Third → Fourth → Fifth → null
//
// Should be mutated into the following list:
//
//   Fifth → Fourth → Third → Second → First → null
//
// This must be done without instantiating a NEW instance of a LinkedList.
// You must do reverse the list in place, by mutating the original input.

function reverse(linkedList){
    if(!linkedList) return undefined;
    let head = linkedList.head;
    let prev = null;
    let curr = head;
    let next = null;
    while(curr.next){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    curr.next = prev;
    return curr;
}

/**
 * Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
 */

 function reverseFromMToN(head, m, n){
     if(!head) return undefined;
        let curr = head;
        let prev = null;
     while(m>1){
        prev = curr;
        curr = curr.next;
        m--;
        n--;
     }

     let con = prev;
     let third = null;
     let tail = curr;

     while(n>0){
         third = curr.next;
         curr.next = prev;
         prev = curr;
         curr = third;
         n--;
     }

     if(con){
         con.next = prev;
     }else{
         head = prev;
     }

     tail.next = curr;
     return head;
 }