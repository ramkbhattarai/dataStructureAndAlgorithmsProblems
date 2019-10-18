function breadthFirstSearch(root, target){
    let queue = [root];
    while(queue.length){
        let node = queue.shift();
        if(node.val === target) return node.val;
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return null;
}