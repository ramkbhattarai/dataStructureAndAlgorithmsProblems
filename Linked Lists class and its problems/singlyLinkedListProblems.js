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