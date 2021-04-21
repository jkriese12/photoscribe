const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/signin").post(userController.signin);
router.route("/signup").post(userController.signup);

module.exports = router;
