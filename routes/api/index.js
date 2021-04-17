const router = require("express").Router();
const photoRoutes = require("./photos");
// Calling to use the router
router.use("/photos", photoRoutes);

module.exports = router;
