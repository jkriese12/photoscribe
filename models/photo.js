const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  photoTitle: { type: String, required: true },
  peopleInPhoto: String,
  dateTaken: String,
  synopsis: String,
  photoLocation: String,
  selectedFile: String,
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
