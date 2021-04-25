const db = require("../models");
const Mongoose = require("mongoose");
// Creating mongoose methods to use for our router calls
module.exports = {
  find: ({ userId, params }, res) => {
    console.log(userId);
    db.User.find({ _id: userId })
      .populate("photos")
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  findGalleries: (req, res) => {
    db.User.find({ _id: req.userId })
      .populate({
        path: "photos",
        albumName: req.params.albumName,
      })
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  create: ({ body, userId }, res) => {
    console.log(userId, "User Token");
    console.log(body);
    db.Photo.create(body)
      .then(({ _id }) => {
        console.log(_id, "New Photo");
        return db.User.findByIdAndUpdate(
          userId,
          { $push: { photos: _id } },
          { new: true }
        );
      })

      .then((dbUser) => {
        console.log(dbUser);
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
