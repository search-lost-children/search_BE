import express from 'express';
import {getSearches, getSearchMiddleWare} from "../controllers/Searches";
const router = express.Router();
import coordinatorsRouter from './Coordinators'
import tasksRouter from './tasks'

router.get('/',getSearches);
//api/v1/searches/1/coordinators
router.use('/:id/coordinators', getSearchMiddleWare, coordinatorsRouter)
router.use('/:id/tasks', getSearchMiddleWare, tasksRouter)


export default router;