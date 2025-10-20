import express from 'express'
import strengthController from '../controllers/strengthController.js'

const router = express.Router()

router.get("/", strengthController.get)


router.route('/reset')
.post(strengthController.default)



export default router