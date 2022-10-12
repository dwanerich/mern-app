import express from 'express'
import { createSneaker, getSneakers } from '../controllers/sneaker.js'

const router = express.Router()

router.post('/', createSneaker)
router.get('/', getSneakers)



export default router;
