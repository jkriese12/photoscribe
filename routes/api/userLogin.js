const router = require("express").Router();
const userController = require("../../controllers/userController");
// Setting post routes to talk to database
router.route("/signin").post(userController.signin);
router.route("/signup").post(userController.signup);

module.exports = router;
