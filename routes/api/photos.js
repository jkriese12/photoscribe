const router = require("express").Router();
const photosController = require("../../controllers/photosController");
// Matches with /api/photos
router.route("/").get(photosController.find);

module.exports = router;
