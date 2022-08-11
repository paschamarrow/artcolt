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
  console.log(req.body);
  try {
    const mediaObject = {
      ...req.body,
      _id: uuidv4(),
    };
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("artcolt");
    await db.collection("media").insertOne(mediaObject);
    sendResponse(res, 200, null, "post created");
  } catch (err) {
    sendResponse(res, 400, null, "post not created");
  }
};
const getMedia = async (req, res) => {
 
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("artcolt");
    const result = await db.collection("media").find().toArray();
    sendResponse(res, 200, result, "post created");
  } catch (err) {
    sendResponse(res, 400, null, "post not created");
  }
};

module.exports = { postMedia, getMedia };
