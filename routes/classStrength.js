import express from 'express'
import strengthController from '../controllers/strengthController.js'

const router = express.Router()

router.get("/", strengthController.get)

router.post("/add", strengthController.add)
// router.delete("/remove", strengthController.removeClass)
router.put("/edit/:id", strengthController.edit)
router.route('/reset')
.post(strengthController.default)


export default router