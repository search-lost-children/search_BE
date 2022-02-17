import express, {NextFunction, Request, Response} from 'express';
import {getAllCoordinates, getMyCoordinates, postMyCoordinates} from "../controllers/Coordinates";
const router = express.Router();

router.post('/me',postMyCoordinates)
router.get('/me', getMyCoordinates)
router.get('/', getAllCoordinates)

export default router