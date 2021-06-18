const Router = require("express").Router;
const apiRouter = Router();
const BinaryTreeController = require("../controllers/BinaryTreeController.js");

apiRouter.get("/Height/:toTree", BinaryTreeController.getHeight);
apiRouter.get("/Neightbors/:toTree/:node", BinaryTreeController.GetNeighbor);
apiRouter.get("/BFS/:toTree", BinaryTreeController.BFS);

module.exports = apiRouter;
