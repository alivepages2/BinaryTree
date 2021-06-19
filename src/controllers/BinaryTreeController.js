const BinaryTree = require("../models/BinaryTree.js");

class BinaryController {
  static getHeight(req, res) {
    let arr = req.params.toTree;

    let BST = new BinaryTree(arr.split(","));
    let ret = BST.getHeight(BST.root);

    return res.json({ heigth: ret }).status(200);
  }
  static GetNeighbor(req, res) {
    let arr = req.params.toTree;
    let BST = new BinaryTree(arr.split(","));
    let nodes = [];
    let level = BST.findNodeLevel(BST.root, req.params.node, 0);
    BST.getNodeByLevel(BST.root, level, nodes, 0);
    return res.json(nodes).status(200);
  }
  static BFS(req, res) {
    let arr = req.params.toTree;
    let BST = new BinaryTree(arr.split(","));
    let BFS = BST.BFS(BST.root);
    return res.json(BFS).status(200);
  }
}

module.exports = BinaryController;
