import express from 'express'
import strengthController from '../controllers/strengthController.js'

const router = express.Router()

router.get("/", strengthController.get)
router.post("/add", strengthController.add)
router.delete("/remove/:name", strengthController.remove)
router.put("/edit/:name", strengthController.edit)
router.post("/reset", strengthController.default)


export default router