import express, {NextFunction, Request, Response} from 'express';
import {auth, sign} from '../controllers/autorization';
const router = express.Router();

// router.get('/api/v1',)
router.post('/', auth)


export default router