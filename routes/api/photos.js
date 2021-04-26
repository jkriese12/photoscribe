const router = require("express").Router();
const photosController = require("../../controllers/photosController.js");
const auth = require("../../middleware/auth.js");
// Matches with /api/photos -  General routes to get and post data
router.route("/").get(auth, photosController.find).post(auth, photosController.create);
// Specific get route to get only the data in a specific album for the user that is logged in
router.route("/:albumName").get(auth, photosController.findGalleries);
// Get route to target a users id and an album without auth that can be sent as a URL via email
router.route("/:id/:albumName").get(photosController.findGalleriesNoAuth);

module.exports = router;
