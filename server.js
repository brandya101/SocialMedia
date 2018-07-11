const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//Starting express
const app = express();

//DB CONFIG
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//Testing Route
app.get("/", (req, res) => res.send("Hello!"));

//use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

//Declaring PORT
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
