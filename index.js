import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.use((req,res,next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

app.listen(() => {
    console.log("Server listening on port " + port)
})
