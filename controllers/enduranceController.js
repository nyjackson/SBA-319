import data from '../data/endurance.js'
import db from '../db.js'

async function getClasses(req,res){
        let endurance_classes;
        console.log("In Get Endurance Classes")
        try{
            const collection = await db.collection("endurance")
            endurance_classes = await collection.find({}).toArray()
        }
        catch(e){
            console.log(e)
             res.status(400)
        }
        res.status(200).json(endurance_classes)
    }
async function resetClasses(req,res){
    try{
        const collection = await db.collection("endurance")
        let clear = await collection.deleteMany({})
        let resetResult = await collection.insertMany(data)
    }
    catch(e){
        console.log(e)
        res.status(400)
    }
    res.status(200).json({message: "Endurance classes reset to the original 10 classes.", result: resetResult, defaultData: data})

}

export default {
    get: getClasses,
    default: resetClasses
}