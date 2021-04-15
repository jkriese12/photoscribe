const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());
const CONNECTION_URL =
  "mongodb+srv://jkriese12:H0ldth3Door@cluster0.spksx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);
require("./routes/routes.js")(app);
// Connect to the Mongo DB
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
    )
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
