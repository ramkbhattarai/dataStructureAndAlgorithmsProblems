/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
 */

 function valid(string){
    let pairs = {
        '(' : ')',
        '{' : '}',
        '[' : ']',
    };
    let stack = [];
    for(let i = 0; i < string.length; i++){
        let char = string[i];
        if(pairs[char]){
            stack.push(char);
        }else if(char === '}' || char === ']' || char === ')'){
            if(pairs[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
 }

 // -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size

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

    push(item){
        
        if(!this.top){
            this.top = this.bottom = item;
        }
        item.next = this.top;
        this.top = item;
        this.length++;
        return this.length;
    }

    pop(){
        if(!this.top) return null;
        let removed = this.top;
        if(this.top === this.bottom){
            this.top = this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return removed.value;
    }
} 

class StackQueue{
    constructor(){
        this.front = null;
        this.back = null;
        this.inStack = new Stack();
        this.outStack = new Stack();
       

    }

    enqueue(val){
        let item = new Node(val);
        if(!this.front){
            this.front = this.back = item;
        }
        this.back.next = item;
        this.back = item;
       
        this.inStack.push(item);
        return this.size();
    }

    dequeue(){
        if(!this.front){
            return null;
        }
        this.front = this.front.next;

        if (this.outStack.size() === 0) {
            while (this.inStack.size() > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        let x = this.outStack.pop();
        return x;
    }

    size(){
        return this.inStack.size() + this.outStack.size();
    }
}