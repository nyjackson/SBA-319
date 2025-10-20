import express from 'express'
import magicController from '../controllers/magicController.js'

const router = express.Router()

router.get("/", magicController.get)


router.route('/reset')
.post(magicController.default)



export default router