const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// body parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// routes
app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nytarticles"
);

app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
