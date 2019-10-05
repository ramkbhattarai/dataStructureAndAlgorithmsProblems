// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!

class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    size(){
        return this.length;
    }

    enqueue(val){
        let item = new Node(val);
        if(!this.front){
            this.front = this.back = item;
        }
        this.back.next = item;
        this.back = item;
        this.length++;
        return this.length;
    }

    dequeue(){
        if(!this.front){
            return null;
        }
        let removed = this.front;
        if(this.front === this.back){
            this.back = null;
        }
        this.front = this.front.next;
        this.length++;
        return removed.value;
    }
}