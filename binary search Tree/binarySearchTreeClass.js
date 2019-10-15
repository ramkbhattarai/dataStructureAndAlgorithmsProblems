// implement binary search tree class

class Node{
    constructor(val){
        this.value = val;
        this.left = this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(val, root = this.root) {
        if (!root) {
            let item = new Node(val);
            this.root = item;
            return;
        }
        if (root.value < val) {
            if (!root.left) {
                root.left = new Node(val);
            } else {
                this.insert(val, root.left);
            }
        } else {
            if (!root.right) {
                root.right = new Node(val);
            } else {
                this.insert(val, root.right);
            }
        }
    }

    searchRec(val, root = this.root){
        if(!root) return false;
        if(val < root.value){
            return this.searchRec(val, root.left);
        }else if(val > root.val){
            return this.searchRec(val, root.right);
        }else{
            return true;
        }
    }

    searchIter(val){
        let root = this.root;
        while(root){
            if(val < root.value) root = root.left;
            else if(val > root.value) root = root.right;
            else return true;
        }
        return false;
    }
}