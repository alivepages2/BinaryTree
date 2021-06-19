class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor(arr) {
    // root of a binary seach tree
    this.root = null;
    for (let i = 0; i < arr.length; i++) {
      this.insert(arr[i]);
    }
    return this;
  }

  insert(data) {
    // Creating a node and initailising
    // with data
    var newNode = new Node(data);

    // root is null then node will
    // be added to the tree and made root.
    if (this.root === null) this.root = newNode;
    // find the correct position in the
    // tree and add the node
    else this.insertNode(this.root, newNode);
  }

  // Method to insert a node in a tree
  // it moves over the tree to find the location
  // to insert a node with a given data
  insertNode(node, newNode) {
    // if the data is less than the node
    // data move left of the tree
    if (newNode.value < node.value) {
      // if left is null insert node here
      if (node.left === null) node.left = newNode;
      // if left is not null recur until
      // null is found
      else this.insertNode(node.left, newNode);
    }

    // if the data is more than the node
    // data move right of the tree
    else {
      // if right is null insert node here
      if (node.right === null) node.right = newNode;
      // if right is not null recur until
      // null is found
      else this.insertNode(node.right, newNode);
    }
  }

  getHeight(node) {
    if (node == null) return -1;
    //let l = this.getHeight(node.left);
    //let r = this.getHeight(node.right);
    /*let sum =
      Math.max(
        this.getHeight(node.left, debug),
        this.getHeight(node.right, debug)
      ) + 1;
      debug.push([node.value, sum]);*/
    return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

    return sum;
  }

  findNodeLevel(node, findvalue, level) {
    if (findvalue == node.value) {
      return level;
    } else {
      if (node.left) return this.findNodeLevel(node.left, findvalue, level + 1);
      if (node.right)
        return this.findNodeLevel(node.right, findvalue, level + 1);
      return level;
    }
  }

  getNodeByLevel(node, findLevel, result, level) {
    if (level == findLevel) {
      result.push(node);
    } else {
      if (node.left)
        this.getNodeByLevel(node.left, findLevel, result, level + 1);
      if (node.right)
        this.getNodeByLevel(node.right, findLevel, result, level + 1);
    }
  }

  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

module.exports = BinaryTree;
