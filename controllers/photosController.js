const db = require("../models");
// Creating mongoose methods to use for our router calls
module.exports = {
  find: (req, res) => {
    db.Photo.find()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Book.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.stauts(422).json(err));
  },
};
