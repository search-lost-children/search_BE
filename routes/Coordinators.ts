import express, {NextFunction, Request, Response} from 'express';
import {getTableInfo, postTableInfo} from "../controllers/Coordinators";
const router = express.Router();

router.get('/', getTableInfo)
router.post('/', postTableInfo)


export default router