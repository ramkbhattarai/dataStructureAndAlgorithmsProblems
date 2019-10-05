
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    size(){
        return this.length;
    }

    push(val){
        let item = new Node(val);
        if(!this.top){
            this.top = this.bottom = item;
        }
        item.next = this.top;
        this.top = item;
        this.length++;
        return this.length;
    }

    pop(){
        if(!this.top){
            return null;
        }
        let removed = this.top;
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return removed.val;
    }
}