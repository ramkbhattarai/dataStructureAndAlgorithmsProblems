function depthFirstSearch(root, target){
    let stack = [root];
    while(stack.length){
        let node = stack.pop();
        if(node.val === target) return node.val;
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    return null;
}