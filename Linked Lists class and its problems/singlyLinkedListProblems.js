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

 // Write a function linkedListIntersection that returns the node at which the 
// intersection of two linked lists begins, or null if there is no such 
// intersection.
//
// ---------- 
// Example 1:
// ----------
// 
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1,list2) should return D 
// as the node of intersection.
// 
//    A → B → C
//             ↘
//               D → E → F
//             ↗
//        X → Y
//
// ---------- 
// Example 2:
// ----------
//
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1, list2) should return null 
// as there is no point of intersection.
// 
//    A → B → C → D
//
//    X → Y → Z
// 
// -----------

function getLength(list){
    let node = list.head;
    let i = 0;
    while(node){
        i++;
        node = node.next;
    }
    return i;

}

function linkedListIntersection(list1, list2){
    let length1 = getLength(list1);
    let length2 = getLength(list2);
    let long = length1 >= length2 ? list1.head : list2.head;
    let short = length1 <= length2 ? list1.head : list2.head;
    let diff = Math.abs(length1 - length2);

    while(long && short){
        if(diff > 0){
            long = long.next;
            diff--;
            continue;
        }
        if(long === short) return long;
        long = long.next;
        short = short.next;
    }
    return null;
    
}

// Given a Singly Linked List, write a function that returns true if the linked
// list contains a cycle, or false if terminates somewhere.
//
// ------------
// Constraints:
// ------------ 
//
// (1) Your function must run in linear time, O(n).
// (2) Your function must use constant space, O(1).
// (3) Do not mutate the linked list or it's nodes in any way.

function hasCycle(list){
    let head = list.head;
    if (!head) return false;
    if (!head.next) return false;
    let fast = head.next.next;
    let slow = head.next;

    while (fast !== slow) {
        if (!fast || !fast.next) return false;

        slow = slow.next;
        fast = fast.next.next;
    }
    return true;

    // let fast = list.head;
    // let slow =list.head;
    // let pause = true;
    // while(fast = fast.next){
    //     if(fast === slow) return true;
    //     slow = pause ? slow : slow.next;
    //     pause = true;
    // }
    // return false;
} 

/**
 * Given a linked list, return the node where the cycle begins.
 *  If there is no cycle, return null.
Note: Do not modify the linked list.
 */

 function startOfCycle(list){
     let head = list.head;
     if(!head || !head.next) return null;
     let fast = head.next.next;
     let slow = head.next;
     while(fast !== slow){
         if(!fast || !fast.next) return null;
         fast = fast.next.next;
         slow = slow.next;
     }

     // if code reaches here there's a cycle;
     // the idea is to set fast at the point of intersection and slow again to head
     // now when they meet it will be always at the start of the loop.(some therom)
     slow = head;
     while (slow !== fast){
         slow = slow.next;
         fast = fast.next;
     }
     return slow;

 }