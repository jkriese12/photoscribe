// All dependencies added
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const dotenv = require("dotenv");
// Setting up express
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;
// Middleware denfined
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

// Connect to the Mongo DB and starting the API server
mongoose
  .connect(process.env.MONGODB_URI || "mongodb:localhost/photoscribe", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
    )
  )
  .catch((error) => console.log(error.message));
// Clearing out any mongoose console errors
mongoose.set("useFindAndModify", false);
