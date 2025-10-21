import data from '../data/magic.js'
import db from '../db.js'

async () => {
     const validator = {
      $jsonSchema: {
        bsonType: "object",
        title: "class validator",
        required: ["_id","name","type"],
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
        await db.command({collMod: "magic", validator})
        console.log("Validity rules applied.")
}
async function getClasses(req,res){
        let magic_classes;
        console.log("In Get Magic Classes")
        try{
            const collection = await db.collection("magic")
            magic_classes = await collection.find({}).toArray()
        }
        catch(e){
            console.log(e)
        }
        res.status(200).json(magic_classes)
    }
async function resetClasses(req,res){
    try{
        const collection = await db.collection("magic")
        let clear = await collection.deleteMany({})
        let resetResult = await collection.insertMany(data)
        res.status(200).json({message: "Magic classes reset to the original 10 classes.", result: resetResult, defaultData: data})
    }
    catch(e){
        console.log(e)
    }
}
async function addClass(req, res) {
  try {
    const collection = await db.collection("magic");
    console.log("Collection", collection)
   
    let result = await collection.insertOne(req.body).catch((e) => {
    return e.errInfo.details.schemaRulesNotSatisfied;
  });
    res
      .status(200)
      .json({
        message: "New Magic Class Added",
        result: result,
        data: req.body
      });
  } catch (e) {
    console.log(e);
    res.status(406).json({message: "Unable to add class. Ensure the request body matches validation rules.", data:req.body})
  }
}

async function editClassByName(req,res){
    try{
        const collection = await db.collection("magic")
        let result = await collection.updateOne({"name": req.params.name},{$set: {...req.body}})
        let updatedResult = await collection.findOne({"name": req.params.name})
        res.status(200).json({message: `Class with name: ${req.params.name} altered.`, result: result, classEntry: updatedResult})
    }catch(e){
        console.log(e)
        res.status().json({})
    }
}

async function removeClassByName(req,res){
    try{
        const collection = await db.collection("magic")
        let deletedEntry = await collection.findOne({"name":req.params.name})
        let result = await collection.deleteOne({"name":req.params.name})
        res.status(200).json({message: `${req.params.name} was deleted.`, deleted:deletedEntry, result: result})
        
    }
    catch(e){
        console.log(e)
        res.status(404).json({message: `Unable to locate class by the name of ${req.params.name}. Try again.`})
    }
}

export default {
  get: getClasses,
  default: resetClasses,
  add: addClass,
  edit: editClassByName,
  remove: removeClassByName,
};