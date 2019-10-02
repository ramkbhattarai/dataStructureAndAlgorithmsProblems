/**
 * Singly Linked Lists
 */

 class LinkedListNode{
     constructor(val){
        this.value = val;
        this.next = null;
     }
 }

 class LinkedList{
     constructor(){
        
         this.head = null;
         this.tail = null;
         this.length = 0;
     }

     addToHead(val){
        let node = new LinkedListNode(val);
        if(!this.head){
             this.head = node;
             this.tail = node;
        }else{
            node.next = this.head;
             this.head = node;
        }
        this.length++;
        return this;
     }
     addToTail(val){
        let node = new LinkedListNode(val);
        if(!this.head){
            this.head = node;
            
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
     }
     removeHead(){
        if(!this.head) return undefined;
        let removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return removed;
     }
     removeTail(){
        if(!this.head) return undefined;
        let curr = this.head;
        let newTail = curr;
        while(curr.next){
            newTail = curr;
            curr = curr.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return curr;
     }
     insertAt(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.addToHead(val);
        if(index === this.length ) return !!this.addToTail(val);
        let prev = this.get(index -1);
        let node = new LinkedListNode(val);
        let temp = prev.next;
        prev.next = node;
        node.next = temp;
        this.length++;
        return true;
     }
     removeFrom(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return this.removeHead();
        if(index === this.length) return this.removeTail();
        let prev = this.get(index -1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;

     }
     contains(target){
         let node = this.head;
         while(node.next){
             if(node.value === target) return true;
             node = node.next;
         }
         return false;
     }
     get(index){
        if(index < 0 || index > this.length) return null;
        let curr = this.head;
        let i =0;
        while(i !== index){
            i++;
            curr = curr.next;
        }
        return curr;
     }
     set(index, val){
         let node = this.get(index);
         if(node){
             node.value = val;
             return true;
         }
         return false;
     }
     size(){
        return this.length;
     }
 }