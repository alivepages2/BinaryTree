const express = require("express");
const apiRouter = require("./src/routes/apiRouter.js");

const PORT = process.env.PORT || 3000;
const app = express();

app.use("/api/v1", apiRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = app;
