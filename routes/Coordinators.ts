import express, {NextFunction, Request, Response} from 'express';
import {deleteCoordinator, getTableInfo, postTableInfo} from "../controllers/Coordinators";
import {adminOnly} from "../controllers/autorization";
const router = express.Router();

router.get('/', getTableInfo)
router.post('/',adminOnly, postTableInfo)
router.delete('/:coordinatorId',adminOnly, deleteCoordinator)

export default router