"use strict";

const { MongoClient } = require("mongodb");
// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// use this data. Changes will persist until the server (backend) restarts.

// this is a helper function to send response
const sendResponse = (res, status, data, message = "No message included.") => {
  return res.status(status).json({ status, data, message });
};

// returns a list of all users
const getUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("artcolt");
    const allUsers = await db.collection("users").find().toArray();

    res
      .status(200)
      .json({ status: 200, data: allUsers, message: "Users found" });
  } catch (err) {
    res.status(400).json({
      status: 400,

      message: err.message,
    });
  }
  client.close();
};

//returns specific user
const getUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("artcolt");
  //   expecting a url
  const _id = req.params.userId;

  const result = await db.collection("users").findOne({ _id });

  result
    ? sendResponse(res, 200, result)
    : sendResponse(res, 404, null, "user not found");
  client.close();
};

//for login?
const getUserByEmail = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("artcolt");
  const email = req.params.userEmail;
  const findUser = await db.collection("users").findOne({ email: email });
  findUser
    ? res.status(200).json({
        status: 200,
        data: findUser,
        message: "User successfully retrieved!",
      })
    : res
        .status(404)
        .json({ status: 404, message: "No user found with that email." });
  client.close();
};

// creates a new user
const addUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  const { bio, statement, location, firstName, lastName, email, avatarSrc } =
    req.body;
  const newUser = {
    _id: uuidv4(),
    bio,
    statement,
    location,
    firstName,
    lastName,
    email,
    avatarSrc,
  };

  try {
    await client.connect();
    const db = client.db("artcolt");
    await db.collection("users").insertOne(newUser);

    res
      .status(201)
      .json({ status: 201, data: newUser, message: "success, user added" });
  } catch (err) {
    res.status(400).json({
      status: 400,

      message: err.message,
    });
  }
  client.close();
};

// updates an existing user

const updateUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const _id = req.params.userId;
  //const { email, bio, statement, firstName, lastName, location } = req.body;

  try {
    await client.connect();
    const db = client.db("artcolt");

    console.log(req.body);
    const existingUser = await db.collection("users").findOne({ _id });
    //fields are not mandatory on the update page
    const updatedUser = {
      $set: {
        email: req.body.email ? req.body.email : existingUser.email,
        firstName: req.body.firstName
          ? req.body.firstName
          : existingUser.firstName,
        lastName: req.body.lastName ? req.body.lastName : existingUser.lastName,
        statement: req.body.statement
          ? req.body.statement
          : existingUser.statement,
        location: req.body.location ? req.body.location : existingUser.location,
        bio: req.body.bio ? req.body.bio : existingUser.bio,
      },
    };
    await db.collection("users").updateOne({ _id }, updatedUser);
    res.status(200).json({ status: 200, message: "User Profile Updated" });
  } catch (err) {
    res.status(400).json({ status: 400, message: "User update unavailable!" });
  }
  client.close();
};

// deletes a specified user
const deleteUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const _id = req.params.userId;

  try {
    await client.connect();
    const db = client.db("artcolt");

    const result = await db.collection("users").deleteOne({ _id });
    result.deletedCount
      ? res
          .status(200)
          .json({ status: 200, data: result, message: "User is deleted!" })
      : res.status(404).json({ status: 404, message: "User not found." });
  } catch (err) {
    console.log(err.stack);
    res.status(400).json({ status: 400, message: err.message });
  }
  client.close();
};

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

module.exports = {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
  getUserByEmail,
};
