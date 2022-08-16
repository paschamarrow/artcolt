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

  //handler ideas

  //media endpoints below

// const getProfileImage = async (req, res) => {
//   const client = new MongoClient(MONGO_URI, options);

//   try {
//     await client.connect();
//     const db = client.db("artcolt");

//     //   expecting a url
//     const _id = req.params.userId;
//     //below would be cloudinary api collection instead of users or ..?
//     const result = await db.collection("users").findOne({ _id });
//     res
//       .status(200)
//       .json({
//         status: 200,
//         data: ProfileImage,
//         message: "Profile Image Retrieved",
//       });
//   } catch (err) {
//     res.status(400).json({
//       status: 400,

//       message: err.message,
//     });
//   }
//   client.close();
// };

// const getArtworks = async (req, res) => {
//   const client = new MongoClient(MONGO_URI, options);

//   try {
//     await client.connect();
//     const db = client.db("artcolt");
//     const allArtworks = await db.collection("artworks").find().toArray();

//     res
//       .status(200)
//       .json({
//         status: 200,
//         data: allArtworks,
//         message: "art work image media found",
//       });
//   } catch (err) {
//     res.status(400).json({
//       status: 400,

//       message: err.message,
//     });
//   }
//   client.close();
// };

// const getArtwork = async (req, res) => {
//   const client = new MongoClient(MONGO_URI, options);

//   try {
//     await client.connect();
//     const db = client.db("artcolt");

//     //   expecting a url
//     const _id = req.params.userId;
//     //below would be cloudinary api collection instead of users or ..?
//     const result = await db.collection("users").findOne({ _id });
//     res
//       .status(200)
//       .json({
//         status: 200,
//         data: singleArtwork,
//         message: "art work media image found",
//       });
//   } catch (err) {
//     res.status(400).json({
//       status: 400,

//       message: err.message,
//     });
//   }
//   client.close();
// };
