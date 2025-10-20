import data from "../data/strength.js";
import db from "../db.js";
import { ObjectId } from "mongodb";

async () => {
     const validator = {
      $jsonSchema: {
        bsonType: "object",
        title: "class validator",
        required: ["name","type"],
        properties: {
          _id: {
            bsonType: "objectId",
          },
          name: {
            bsonType: "string",
          },
          sub_type: {
            bsonType: ["string","null"],
          },
          type: {
            enum: ["magic", "strength", "endurance"]
          },
          weapon: {
            bsonType: ["string","null"],
          },
        },
      },
    }
        await db.command({collMod: "strength", validator})
        console.log("Validity rules applied.")
}

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
    res.status(400).json({message: "Unable to Reset Classes."})
  }
}

async function addClass(req, res) {
  try {
    const collection = await db.collection("strength");
    console.log("Collection", collection)
   
    let result = await collection.insertOne(req.body).catch((e) => {
    return e.errInfo.details.schemaRulesNotSatisfied;
  });
    res
      .status(200)
      .json({
        message: "New Strength Class Added",
        result: result,
        data: req.body
      });
  } catch (e) {
    console.log(e);
    res.status(406).json({message: "Unable to add class. Ensure the request body matches validation rules.", data:req.body})
  }
}

async function editClass(req,res){
    try{
        const collection = await db.collection("strength")
        let result = await collection.updateOne({_id: req.params.id},{...req.body})
        let updatedResult = await collection.find({_id:req.params.id})
        res.status(200).json({message: `Class with id: ${_id} altered.`, result: result, classEntry: updatedResult})
    }catch(e){
        console.log(e)
        res.status().json({})
    }
}

export default {
  get: getClasses,
  default: resetClasses,
  add: addClass,
  edit: editClass,
 // remove: removeClass,
};
