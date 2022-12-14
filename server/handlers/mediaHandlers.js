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

const postMedia = async (req, res) => {
 
  try {
    const mediaObject = {
      ...req.body,
      _id: uuidv4(),
    };
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("artcolt");
    await db.collection("media").insertOne(mediaObject);
    sendResponse(res, 200, null, "media post created");
  } catch (err) {
    sendResponse(res, 400, null, "media post not created");
  }
};
const getMedia = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("artcolt");
    const result = await db.collection("media").find().toArray();
    sendResponse(res, 200, result, "media post found");
  } catch (err) {
    sendResponse(res, 400, null, "media post not found");
  }
};

const getMediaByEmail = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("artcolt");
    const email = req.query.email;
  
    const result = await db.collection("media").find({ email }).toArray();

    sendResponse(res, 200, result, "email post found");
  } catch (err) {
    sendResponse(res, 400, null, "media post not found");
  }
};

module.exports = { postMedia, getMedia, getMediaByEmail };
