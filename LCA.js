/*
This TreeNode Code is Based on 
https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/
*/
//Create Nodes

const LEFT = 0;
const RIGHT = 1;

class TreeNode {
  constructor(val) {
    this.val = val;
    this.descendents = [];
    this.parent = null;
  }

  get left() {
    return this.descendents[LEFT];
  }

  set left(node) {
    this.descendents[LEFT] = node;
    if (node) {
      node.parent = this;
    }
  }

  get right() {
    return this.descendents[RIGHT];
  }

  set right(node) {
    this.descendents[RIGHT] = node;
    if (node) {
      node.parent = this;
    }
  }
}

// console.log("LCA(4, 5): " + findLCA(4, 5));
// console.log("LCA(4, 6): " + findLCA(4, 6));
// console.log("LCA(3, 4): " + findLCA(3, 4));
// console.log("LCA(2, 4): " + findLCA(2, 4));

/*
This program is based on the java solution found at
https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/

*/

//Functions
function LCA(num1, num2) {
  //Build Tree
  let startRoot = new TreeNode(1);
  startRoot.left = new TreeNode(2);
  startRoot.right = new TreeNode(3);
  startRoot.left.left = new TreeNode(4);
  startRoot.left.right = new TreeNode(5);
  startRoot.right.left = new TreeNode(6);
  startRoot.right.right = new TreeNode(7);
  return findLCA(startRoot, num1, num2);
}

//Functions
function findLCA(root, n1, n2) {
  let path1 = [];
  let path2 = [];
  return findLCAInternal(root, n1, n2, path1, path2);
}

function findLCAInternal(root, n1, n2, path1, path2) {
  if (!findPath(root, n1, path1) || !findPath(root, n2, path2)) {
    console.log(path1.length > 0 ? "n1 is present" : "n1 is missing");
    console.log(path2.length > 0 ? "n2 is present" : "n2 is missing");
    return -1;
  }

  let i = 0;
  for (i = 0; i < path1.length && path2.length; i++) {
    if (path1[i] != path2[i]) break;
  }
  return path1[i - 1];
}

function findPath(root, n, path) {
  if (root == null) {
    return false;
  }
  path.push(root.val);

  if (root.val == n) {
    return true;
  }

  if (root.left != null && findPath(root.left, n, path)) {
    return true;
  }

  if (root.right != null && findPath(root.right, n, path)) {
    return true;
  }

  path.pop();

  return false;
}

module.exports = LCA;
