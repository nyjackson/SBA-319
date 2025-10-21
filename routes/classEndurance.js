import express from 'express'
import enduranceController from '../controllers/enduranceController.js'

const router = express.Router()

router.get("/", enduranceController.get)
router.post("/add", enduranceController.add)
router.delete("/remove/:name", enduranceController.remove)
router.put("/edit/:name", enduranceController.edit)
router.post("/reset", enduranceController.default)



router.route('/reset')
.post(enduranceController.default)


export default router