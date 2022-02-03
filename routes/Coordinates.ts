import express, {NextFunction, Request, Response} from 'express';
import {} from "../controllers/Coordinates";
const router = express.Router();


router.post('/me', coordinatesDelivery)


export default router