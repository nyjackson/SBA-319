import express from 'express'
import 'dotenv/config'
import db from './db.js'
import magicRoute from './routes/classMagic.js'

const app = express()
const port = process.env.PORT || 4400

app.use(express.json())
app.use("/", (req,res,next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

app.use("/magic", magicRoute)

app.get('/', (req,res, next) => {
    res.send("Welcome to the Classes API ")
})

app.listen(port, () => {
    console.log("Server listening on port " + port)
})
