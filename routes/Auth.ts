import express from 'express';
import {auth} from '../controllers/autorization';
const router = express.Router();

router.post('/', auth)


export default router