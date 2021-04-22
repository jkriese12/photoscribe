const db = require("../models");
// Creating mongoose methods to use for our router calls
module.exports = {
  find: (req, res) => {
    db.Photo.find()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: async (req, res) => {
    const post = req.body;

    const newPostMessage = new db.Photo({ ...post, createdBy: req.email });

    try {
      await newPostMessage.save();

      res.status(201).json(newPostMessage);
      console.log(req.user);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },
  update: (req, res) => {
    db.Photo.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
