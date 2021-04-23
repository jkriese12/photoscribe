const db = require("../models");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
// Creating mongoose methods to use for our router calls
module.exports = {
  find: (req, res) => {
    // const decode = jwt.verify(token, config.get("jwtPrivateKey"));
    // var userId = decode.id;
    // console.log(userId);
    console.log();
    db.User.find({ email: "testuser@test.com" })
      .populate("photos")
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  create: ({ body }, res) => {
    db.Photo.create(body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate({}, { $push: { photos: _id } }, { new: true })
      )
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  update: (req, res) => {
    db.Photo.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
