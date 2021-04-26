const db = require("../models");
const Mongoose = require("mongoose");
// Creating mongoose methods to use for our router calls
module.exports = {
  // Finding all data for the specifc user that is logged in
  find: ({ userId }, res) => {
    db.User.find({ _id: userId })
      .populate("photos")
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  // Gets data specific to the album the user selects for that user
  findGalleries: ({ userId, params }, res) => {
    db.User.find({ _id: userId })
      .populate("photos")
      .then((dbModel) => {
        const array = dbModel[0].photos.filter(
          (data) => data.albumName === params.albumName
        );

        res.json(array);
      })
      .catch((err) => res.status(422).json(err));
  },
  // Gets data for specific gallery without auth so it can be sent as a link for anyone to view
  findGalleriesNoAuth: ({ params }, res) => {
    console.log(params);
    db.User.find({ _id: params.id })
      .populate("photos")
      .then((dbModel) => {
        const array = dbModel[0].photos.filter(
          (data) => data.albumName === params.albumName
        );

        res.json(array);
      });
  },
  // Creates post to the data base in the nested photos array of the user object of an entire photo object
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
  deleteOne: ({ userId, params }, res) => {
    db.User.find({ _id: userId })
      .populate("photos")
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
};
