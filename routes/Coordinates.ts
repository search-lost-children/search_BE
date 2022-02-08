import express, {NextFunction, Request, Response} from 'express';
import {} from "../controllers/Coordinates";
const router = express.Router();
import {coordinatesDelivery} from "../controllers/Coordinates";

router.post('/me', coordinatesDelivery)


export default router