import express from 'express'
import enduranceController from '../controllers/enduranceController.js'

const router = express.Router()

router.get("/", enduranceController.get)


router.route('/reset')
.post(enduranceController.default)


export default router