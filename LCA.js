/*
This TreeNode Code is Based on 
https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/
*/
//Create Nodes

const LEFT = 0;
const MID = 1;
const RIGHT = 2;

class TreeNode {
  constructor(val) {
    this.val = val;
    this.descendents = [];
    this.parents = [];
  }

  get left() {
    return this.descendents[LEFT];
  }

  set left(node) {
    this.descendents[LEFT] = node;
    if (node) {
      node.parents.push(this)
    }
  }

  get right() {
    return this.descendents[RIGHT];
  }

  set right(node) {
    this.descendents[RIGHT] = node;
    if (node) {
      node.parents.push(this)
    }
  }

    get middle() {
      return this.descendents[MID];
    }
  
    set middle(node) {
      this.descendents[MID] = node;
      if (node) {
        node.parents.push(this)
      }
    }
  
}

/*
This program is based on the java solution found at
https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/

*/

//Functions

function LCA_DAG(num1, num2) {
  //Build Tree
  let startRoot = new TreeNode(1);
  startRoot.middle = new TreeNode(3);
  startRoot.middle.middle = new TreeNode(5);
  startRoot.middle.middle.middle = new TreeNode(6);
  startRoot.middle.left = new TreeNode(7);
  startRoot.middle.right = new TreeNode(4);

  startRoot.left = startRoot.middle.left
  startRoot.left.middle = new TreeNode(8);

  startRoot.right = new TreeNode(2);
  startRoot.right.left = startRoot.middle
  startRoot.right.middle = startRoot.middle.right
  return findLCA(startRoot, num1, num2);
}


function LCA_Tree(num1, num2) {
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

  if (root.middle != null && findPath(root.middle, n, path)) {
    return true;
  }

  if (root.right != null && findPath(root.right, n, path)) {
    return true;
  }


  path.pop();

  return false;
}

module.exports = LCA_DAG;
