import express from 'express'
import magicController from '../controllers/magicController.js'

const router = express.Router()

router.get("/", magicController.get)
router.post("/add", magicController.add)
router.delete("/remove/:name", magicController.remove)
router.put("/edit/:name", magicController.edit)
router.post("/reset", magicController.default)



export default router