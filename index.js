import express from 'express'
import 'dotenv/config'
import db from './db.js'
import magicRoute from './routes/classMagic.js'
import strengthRoute from './routes/classStrength.js'
import enduranceRoute from './routes/classEndurance.js'

const app = express()
const port = process.env.PORT || 4400

app.use(express.json())
app.use("/", (req,res,next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

app.use("/magic", magicRoute)
app.use("/strength", strengthRoute)
app.use("/endurance", enduranceRoute)

app.get('/', async (req,res) => {
    let strengthClasses = await db.collection("strength").find({}).toArray()
    let magicClasses = await db.collection("magic").find({}).toArray() 
    let enduranceClasses = await db.collection("endurance").find({}).toArray()  
    
    const result = [...strengthClasses,...enduranceClasses, ...magicClasses]
    res.json({message: "Welcome to the Character Classes API. Loading all available classes from db...", data: result})
})

app.use((err, _req, res, next) => {
  res.status(500).send("Something went wrong.");
});

app.listen(port, () => {
    console.log("Server listening on port " + port)
})

