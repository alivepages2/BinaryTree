const BinaryTree = require("../models/BinaryTree.js");

class BinaryController {
  static getHeight(req, res) {
    let arr = req.params.toTree;
    let BST = new BinaryTree(arr.split(","));
    let ret = BST.getHeightIni();
    return res.json({ heigth: ret }).status(200);
  }
  static GetNeighbor(req, res) {
    let arr = req.params.toTree;
    let BST = new BinaryTree(arr.split(","));
    let nodes = [];
    BST.GetNeighborIni(req.params.node, nodes);
    return res.json(nodes).status(200);
  }
  static BFS(req, res) {
    let arr = req.params.toTree;
    let BST = new BinaryTree(arr.split(","));
    let BFS = BST.BFS();
    return res.json(BFS).status(200);
  }
}

module.exports = BinaryController;
