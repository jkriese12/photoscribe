const router = require("express").Router();
const photosController = require("../../controllers/photosController.js");
// const userController = require("../../controllers/userController.js");
// Matches with /api/photos -  General routes to get and post data
router.route("/").get(photosController.find).post(photosController.create);
// router.route("/signin").get(userController.signin);
// router.route("/signup").get(userController.signup);

// Specifc routes by ID to update, delete and get
router.route("/:id").put(photosController.update);

module.exports = router;
