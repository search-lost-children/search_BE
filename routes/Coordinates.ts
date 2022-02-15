import express, {NextFunction, Request, Response} from 'express';
import {getAllCoordinates, getMyCoordinates, postMyCoordinates} from "../controllers/Coordinates";
const router = express.Router();

router.post('/me', getMyCoordinates)
router.get('/me', postMyCoordinates)
router.get('/', getAllCoordinates)

export default router