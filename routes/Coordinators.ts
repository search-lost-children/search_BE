import express, {NextFunction, Request, Response} from 'express';
import {deleteCoordinator, getTableInfo, postTableInfo} from "../controllers/Coordinators";
const router = express.Router();

router.get('/', getTableInfo)
router.post('/', postTableInfo)
router.delete('/:coordinatorId', deleteCoordinator)

export default router