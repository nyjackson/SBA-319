import express from 'express'
import magicController from '../controllers/magicController.js'

const router = express.Router()

router.route('/magic')
.get(magicController.get)


router.route('/reset')
.post(magicController.default)




export default router