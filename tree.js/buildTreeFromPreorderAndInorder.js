/**
 * Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
 */

 function buildTree(preorder, inorder){
     if(!preorder.length && !inorder.length) return null;

     let val = preorder[0];
     let root = new TreeNode(val);

     let index = inorder.indexOf(val); // we have to take the index from the inorder 
     // so that we can cover what is in the left of that array to make the left tree.

     let leftInorder = inorder.slice(0, index);
     let rightInorder = inorder.slice(index + 1);

     let leftPreorder = preorder.filter(ele => leftInorder.includes(ele));
     let rightPreorder = preorder.filter(ele => rightInorder.includes(ele));

     let leftTree = buildTree(leftPreorder,leftInorder);
     let rightTree = buildTree(rightPreorder, rightInorder);
      root.left = leftTree;
      root.right = rightTree;
      return root;

 }

var buildTree = function (inorder, postorder) {
    if (inorder.length === 0 && postorder.length === 0) return null;
    let val = postorder[postorder.length - 1];
    let root = new TreeNode(val);

    let index = inorder.indexOf(val);

    let leftInorder = inorder.slice(0, index);
    let rightInorder = inorder.slice(index + 1);
    // console.log(leftInorder);
    // console.log(rightInorder);
    // console.log("--------------")
    let leftpost = postorder.filter(ele => leftInorder.includes(ele));
    let rightpost = postorder.filter(ele => rightInorder.includes(ele));
    // console.log(leftpost);
    // console.log(rightpost);
    root.left = buildTree(leftInorder, leftpost);
    root.right = buildTree(rightInorder, rightpost);
    return root;
};

// Given root of the tree find the inorder, preorder and postorder arrays of its values;

function inorderArray(root){
    if(!root) return [];
    let left = inorderArray(root.left);
    let right = inorderArray(root.right);
    return [...left, root.val,...right];
}

function postorderArray(root) {
    if (!root) return [];
    let left = postorderArray(root.left);
    let right = postorderArray(root.right);
    return [...left, ...right, root.val];
}

function preorderArray(root) {
    if (!root) return [];
    let left = preorderArray(root.left);
    let right = preorderArray(root.right);
    return [root.val,...left, ...right];
}