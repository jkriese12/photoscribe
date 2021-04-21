const router = require("express").Router();
const photoRoutes = require("./photos");
const userRoutes = require("./userLogin");
// Calling to use the router
router.use("/photos", photoRoutes);
router.use("/auth", userRoutes);

module.exports = router;
