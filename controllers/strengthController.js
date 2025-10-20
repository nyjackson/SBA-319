import data from '../data/strength.js'
import db from '../db.js'

async function getClasses(req,res){
        let strength_classes;
        console.log("In Get Strength Classes")
        try{
            const collection = await db.collection("strength")
            strength_classes = await collection.find({}).toArray()
        }
        catch(e){
            console.log(e)
        }
        res.status(200).json(magic_classes)
    }
async function resetClasses(req,res){
    try{
        const collection = await db.collection("strength")
        let clear = await collection.deleteMany({})
        let resetResult = await collection.insertMany(data)
        res.status(200).json({message: "Strength classes reset to the original 10 classes.", result: resetResult, defaultData: data})
    }
    catch(e){
        console.log(e)
    }
}

export default {
    get: getClasses,
    default: resetClasses
}