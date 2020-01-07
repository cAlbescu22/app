const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
app.use(bodyParser.json());
//import routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to db");
});
//boot server
app.listen(3000);
