// Prompt:
// -------
//
// Given the implementation of a Doubly Linked List, design and implement 
// an LRU, or Least Recently Used, cache.
//
// ------------
// Explanation:
// ------------
//
// An LRU Cache is a data structure valued for its constant time read and write
// operations. Its methods, get(key) and set(key, val), are both O(1), just
// like a Hash Table.
//
// However, unlike a Hash Table, instead of re-sizing once it reaches its
// maximum capacity for stored items, it instead removes the least recently
// used item from the cache, also in O(1) time.
//
// NOTE: We determine the item that is "Least Recently Used" by its most-recent
// "get" time, not just by its creation time!
//
// --------
// Example:
// --------
//
// const lruCache = new LRUCache(4);   => limit of 4 items
// lruCache.set('a', 'A');
// lruCache.set('b', 'B');
// lruCache.set('c', 'C');
// lruCache.set('d', 'D');
// lruCache.set('e', 'E');
//
// lruCache.get('c')                   => 'C'
// lruCache.get('b')                   => 'B'
//
// Item 'a' was removed because it was the oldest item by insertion/usage
//
// lruCache.get('a')                   => null
//
// Next, item 'e' is removed to make room, because it is the oldest by usage,
// which takes priority.
//
// lruCache.set('f', 'F');
//
// Item 'd' is also removed, because it was retrieved before item 'b' was
// last retrieved.
//
// lruCache.set('g', G);


// lets make node class for double likned list. 
// we need to have next and prev pointers in its constructor
// in addition we need to have a delete method for every node;

class LRUCacheItem{
    constructor(key = null, val=null){
        this.key = key; // each item of lrucache should have key to be used in hash
        this.value = val; // each item of lrucache should have value
        this.node = null; // and it should have a node
    }
}
class LRUCache{
    constructor(capacity){
        this.capacity = capacity; // to know the capacity of the cache
        this.ordering = new DoublyLinkedList(); // to order the node in a recently used
                                                // trend which can be done in doublylinked list
        this.items = {}; // to store the nodes in hash for constant look up
        this.length = 0; // to know the current length of cache.
    }

    get(key){
        if(!this.items[key]) return null;
        let item = this.items[key]; // I can't return simply the item beacuse i have
                                    // to update it as recently used so that it 
                                    // doesn't get removed from cache
        this.promote(item);
        return item.value;
    }

    set(key, val){
        let item;
        if(this.items[key]){ // check if item exits in cache if it does
            item = this.items[key]; // save it in variable
            item.value = val; // change its value
            this.promote(item); // and update it
        }else{
            if(this.isFull()){ // check to see if cache is full if it is
                this.prune(); // remove the last used
            } 
            // when code runs here its sure to have space in it
            item = new LRUCacheItem(key, val); // create a new item
            item.node = this.ordering.unshift(item.val);// keep the item at the begining
            this.items[key] = item;// store the item in hash with its key
            this.length++;
            
        }
    }

    isFull(){
        return this.length >= this.capacity;
    }

    promote(item){
        this.ordering.moveToFront(item.node);
    }

    prune(){
        let oldest = this.ordering.pop();
        delete this.items[oldest.key];
        this.length = Math.max(0, this.length -1);
    }

}
class Node{
    constructor(val, prev = null, next = null){
        this.value = val;
        this.next = next;
        this.prev = prev;
    }

    delete(){
        if(this.prev) this.prev.next = this.next;
        if(this.next) this.next.prev = this.prev;
    }
}

// lets make doublelinked list class 

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    pop(){
        if(!this.head && !this.tail) return null;
        let removed = this.tail;
        this.tail = this.tail.prev;
        removed.delete();
        return removed;
    }

    moveToFront(node){ // to move to front we want to add it as if we are adding
        // new node to head. To do so

        if(node === this.head){// check if its head if yes do nothing
            return;
        }else if(node === this.tail){ // if its tail take it out of list
            this.pop();
        }else {
            node.delete(); // if in middle somewhere delete it;
        }
        node.prev = node.next = null; // make it as if it was new node

         // then keep in head like adding to head
         if(!this.head){
             this.head = node;
             this.tail = node;
         }else {
             node.next = this.head;
             this.head.prev = node;
             this.head = node;
         }
    }
    unshift(val){
        let item;
        if(!head) {
            this.head = new Node(val);
            this.tail = this.head;
        }
         item = new Node(val, null, this.head);
        // item.next = this.head;
        this.head.prev = item;
        this.head = item;
        this.length++;
        return this.head;
    }
}

