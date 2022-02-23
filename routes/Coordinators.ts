import express, {NextFunction, Request, Response} from 'express';
import {deleteCoordinator, getCoordinators, addCoordinator} from "../controllers/Coordinators";
import {adminOnly} from "../controllers/autorization";
const router = express.Router();

router.get('/', getCoordinators)
router.post('/',adminOnly, addCoordinator)
router.delete('/:coordinatorId',adminOnly, deleteCoordinator)

export default router