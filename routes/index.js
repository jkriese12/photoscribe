const router = require("express").Router();
const apiRoutes = require("./api");
// API routes to be used
router.use("/api", apiRoutes);

module.exports = router;
