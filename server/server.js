const express = require("express");
const morgan = require("morgan");

const port = 8000;

const {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,

  // getProfileImage,
  // getArtworks,
  // getArtwork,
  // updateProfileImage,
  // updateArtwork,
  // deleteProfileImage,
  // deleteArtwork,
} = require("./handlers/Handlers");

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

  //artwork and profile image endpoints

  //profile images
  //get a single profile image
  // .get("/api/profile/:profileImage", getProfileImage)
  // //update a single profile image
  // .patch("/api/update-profileImage/:profileImage", updateProfileImage)
  // //delete a profile image
  // .delete("/api/delete-profileImage/:profileImage", deleteProfileImage)

  // //get all artwork images and their data
  // .get("/api/get-artworks", getArtworks)

  // //get a single artwork image and its data
  // .get("/api/get-artworks/:artworkId", getArtwork)

  // //update a single artwork image post and its data
  // .patch("/api/update-artwork/:artworkId", updateArtwork)

  // //delete a single artwork image post and its data
  // .delete("/api/delete-artwork/:artworkId", deleteArtwork)

  

  .listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
