const express = require("express");
const morgan = require("morgan");

const port = 8000;

const {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
  getUserByEmail,
} = require("./handlers/userHandlers");

const {
  postMedia,
  getMedia,
  getMediaByEmail,
} = require("./handlers/mediaHandlers");

express()
  .use(express.json())

  .use(express.urlencoded({ extended: true }))
  .get("/", (req, res) => {
    res.send("Hello World!");
    //change line 7 to standard res.status(200)
  })
  .get("/api/get-users", getUsers)
  .get("/api/get-user/:userId", getUser)
  .get("/api/get-media", getMedia)
  .get("/api/get-useremail/:userEmail", getUserByEmail)

  .post("/api/add-user", addUser)
  .post("/api/post-media", postMedia)
  .get("/api/get-mediabyemail", getMediaByEmail)
  .patch("/api/update-user/:userId", updateUser)
  .delete("/api/delete-user/:userId", deleteUser)

  

  .listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
