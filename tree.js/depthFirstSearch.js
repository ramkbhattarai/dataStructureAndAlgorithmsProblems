function dfs(root, target){
    if(!root) return null;
    let stack = [root];
    while(stack.length){
        let node = stack.pop();
        if(node.val === target) return node;
        if (node.right) stack.push(node.right);

        if(node.left) stack.push(node.left);
    }
    return null;
}