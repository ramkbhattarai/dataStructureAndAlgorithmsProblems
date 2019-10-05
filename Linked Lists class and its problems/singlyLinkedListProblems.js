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
    let fast = head.next.next; // set fast to move 2 steps
    let slow = head.next; // set slow to run 1 step

    while (fast !== slow) { // if they match there's a cycle
        if (!fast || !fast.next) return false; // if next pointer of the fast is null
        // that means linked list is not cyclic;

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

 /**
  * Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.



Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
  */

  function swapIter(head){ // this is intersting solution
      if(!head || !head.next) return head;
      let curr = head;
      let newHead = head.next; // second node will be the head at last
      while(curr || curr.next){
            let temp = curr; // save 1st node 
            curr = curr.next; // update curr to 2nd node
            temp.next = curr.next; // change the pointer of 1st node to third node
            // this is so imp to remember because when we do temp.next we will be 
            // pointing to 3rd node.
            curr.next = temp; // pointer of 2nd node to 1st node
            curr = temp.next; // node change curr to 3rd node
            if(curr && curr.next) temp.next = curr.next; // if 3rd and 4th node still
            // exist set the pointer of first node to 4th node
      }
      return newHead;
  }

  function swapRecursive(head){ // this is a good case of recursion
      if(!head || !head.next) return head; // if there's only one node return it
      let temp = head.next; // second node is the head that we will return 
      head.next = swapRecursive(head.next.next); // this recursive call return 4th node 
      // if there is which being pointed by the 1st node.
      temp.next = head; // reverse the pointer to of 2nd node to the 1st node.
      return temp; 
  }

  /**
   * Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
   */

var reorderList = function (head) {
    // this algorithm is more intiutive
    let map = {}; // create an object to store all the nodes with the key equal to their value
    for (let i = 1; head; i++) { // fill the object
        map[i] = head;
        head = head.next;
    }
    // console.log(map)
    let dummy = new ListNode(0); // create dummy node with 0 value
    let curr = dummy;
    let j = Object.keys(map).length; // this is the way to find the length of object
    // console.log(j)
    for (let i = 1; i <= j; i++) { // there are two pointer i , j 
        curr.next = map[i]; // this changes pointer from last to first node
        if (i !== j) { map[i].next = map[j]; } // this is imp step
        map[j].next = null; // don't forget this
        curr = map[j]; // update current to last node
        j--;
    }
};

/**
 * Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
 */

 function removeNthNode(head, n){
     let dummy = new Node(0);
     dummy.next = head;
     let first = dummy;
     let second = dummy;
     // first move one pointer to n + 1 position 
     for(let i = 1; i <= n+1; i++){
         first = first.next;
     }
     // now move both pointers to the whole length of list
     // so that second pointer is left in n position of the last node
     // this is clever way to get to nth position from the end 

     while(first){
         first = first.next;
         second = second.next;
     }
     // now remove the given node.
     second.next = second.next.next;
     return dummy.next;
 }

 /**
  * Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL
  */

  function rotateRight(head, k){
      if(!head) return head;
      let tail = head;
      // calculate the length of the list;
      let count = 0;
      while(tail.next){
          tail = tail.next;
          count++;
      }
      tail.next = head;// make the list cyclic at first;
      let newHeadIndex = count - k % count; // this is the way to rotate

      for(let i = 0; i < newHeadIndex; i++){
          tail = tail.next;
      }
      // now we have reached the node which we want to make tail
      // and next node to it as head
  }