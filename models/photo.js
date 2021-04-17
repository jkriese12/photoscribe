const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  photoTitle: { type: String, required: true },
  peopleInPhoto: String,
  dateTaken: { type: Date, default: new Date() },
  synopsis: String,
  selectedFile: String,
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
