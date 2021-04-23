const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  dateTaken: Number,
  synopsis: String,
  photoLocation: String,
  album: String,
  selectedFile: String,
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
