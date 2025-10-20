import data from "../data/strength.js";
import db from "../db.js";
import { ObjectId } from "mongodb";

async function getClasses(req, res) {
  let strength_classes;
  console.log("In Get Strength Classes");
  try {
    const collection = await db.collection("strength");
    strength_classes = await collection.find({}).toArray();
  } catch (e) {
    console.log(e);
  }
  res.status(200).json(strength_classes);
}

async function resetClasses(req, res) {
  try {
    const collection = await db.collection("strength");
    let clear = await collection.deleteMany({});
    let resetResult = await collection.insertMany(data);
    res
      .status(200)
      .json({
        message: "Strength classes reset to the original 10 classes.",
        result: resetResult,
        defaultData: data,
      });
  } catch (e) {
    console.log(e);
  }
}

async function addClass(req, res) {
  try {
    const collection = await db.collection("strength");
    const validator = {
      $jsonSchema: {
        bsonType: "object",
        title: "class validator",
        required: ["_id", "name", "sub_type", "type", "weapon"],
        properties: {
          _id: {
            bsonType: "objectId",
          },
          name: {
            bsonType: "string",
          },
          sub_type: {
            bsonType: "string",
          },
          type: {
            enum: ["magic", "strength", "endurance"]
          },
          weapon: {
            bsonType: "string",
          },
        },
      },
    }
    const applyRules = await db.command({collMod: "strength", validator})
    console.log(applyRules)
    let result = await collection.insertOne(req.body)
    res
      .status(200)
      .json({
        message: "New Strength Class Added",
        addedClass: result,
      });
  } catch (e) {
    console.log(e);
  }
}

export default {
  get: getClasses,
  default: resetClasses,
  add: addClass,
 // edit: editClass,
 // remove: removeClass,
};
