// "use strict";

// const { MongoClient } = require("mongodb");
// require("dotenv").config();

// //db connection data
// const { MONGO_URI } = process.env;

// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// };

// const items = require("./data/items.json");
// const companies = require("./data/companies.json");

// /**
//  *
//  * uploads items to the mongo database
//  *
//  * @param {*} req
//  * @param {*} res
//  */
// const uploadItems = async (req, res) => {
//     // creates a new client
//     const client = new MongoClient(MONGO_URI, options);

//     try {
//         // connect to the client
//         await client.connect();

//         // connect to the database (db name is provided as an argument to the function)
//         const db = client.db("artcolt");

//         //insert items
//         await db.collection("items").insertMany(items);
//     } catch (error) {
//         console.log(error);
//     }

//     // close the connection to the database server
//     client.close();
// };

// /**
//  *
//  * uploads companies to the mongo database
//  *
//  * @param {*} req
//  * @param {*} res
//  */
// const uploadCompanies = async (req, res) => {
//     // creates a new client
//     const client = new MongoClient(MONGO_URI, options);

//     try {
//         // connect to the client
//         await client.connect();

//         // connect to the database
//         const db = client.db("artcolt");

//         //insert companies
//         await db.collection("companies").insertMany(companies);
//     } catch (error) {
//         console.log(error);
//     }

//     // close the connection to the database server
//     client.close();
// };

// /**
//  *  Initial user for testing purposes
//  * @param {*} req
//  * @param {*} res
//  */
// const uploadUser = async (req, res) => {
//     // creates a new client
//     const client = new MongoClient(MONGO_URI, options);

//     //create user
//     let user = {
//         user: "John",
//         email: "john@hotmail.com",
//         items: [
//             { id: 6550, cartQuantity: 1 },
//             { id: 6551, cartQuantity: 3 },
//         ],
//     };
//     try {
//         // connect to the client
//         await client.connect();

//         // connect to the database
//         const db = client.db("fivealive");

//         //insert companies
//         await db.collection("user").insertOne(user);
//     } catch (error) {
//         console.log(error);
//     }

//     // close the connection to the database server
//     client.close();
// };

// uploadItems();
// uploadCompanies();
// uploadUser();
