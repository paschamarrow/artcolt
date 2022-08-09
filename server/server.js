const express = require("express");
const morgan = require("morgan");

const port = 8000;

const {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
  // updatePost
} = require("./handlers");

express()
  .use(express.json())
  .get("/", (req, res) => {
    res.send("Hello World!");
    //change line 7 to standard res.status(200)
  })
  .get("/api/get-users", getUsers)
  .get("/api/get-user/:userId", getUser)
  .post("/api/add-user", addUser)
  .delete("/api/delete-user/:userId", deleteUser)
  .patch("/api/update-user/:userId", updateUser)
  // .patch("/api/update-post/". updatePost)

  .listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
