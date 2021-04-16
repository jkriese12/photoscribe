const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// API routes to be used
router.use("/api", apiRoutes);
// If we do not hit an API route this will send the react app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
