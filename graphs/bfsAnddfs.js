function bfs(node, targetVal){
    let set = new Set();
    let queue = [node];
    while(queue.length){
        let item = queue.shift();
        if(set.has(item)) continue;
        set.add(item);
        if(item.val === targetVal) return item;
        queue.push(...item.neighbors);
    }
    return null;
}

function dfs(node, targetVal, visited = new Set()){

}