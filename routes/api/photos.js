const router = require("express").Router();
const photosController = require("../../controllers/photosController");
// Matches with /api/photos -  General routes to get and post data
router.route("/").get(photosController.find).post(photosController.create);
// Specifc routes by ID to update, delete and get
router.route("/:id").put(photosController.update);

module.exports = router;
