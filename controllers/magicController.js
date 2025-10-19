import data from '../data/magic.js'

async function getClasses(req,res){
        let magic_classes;
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
        let resetResult = await collection.insertMany(data)
        res.status(200).json({message: "All classes reset to the three default classes.", result: resetResult, defaultData: data})
    }
    catch(e){
        console.log(e)
    }
}

export default {
    get: getClasses(),
    default: resetClasses()
}