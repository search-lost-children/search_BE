import express from 'express';
import {getSearches, getSearchMiddleWare} from "../controllers/Searches";
const router = express.Router();
import coordinatorsRouter from './Coordinators'
import tasksRouter from './tasks'
import squadsRouter from './squads'

router.get('/',getSearches);
//api/v1/searches/1/coordinators
router.use('/:id/coordinators', getSearchMiddleWare, coordinatorsRouter)
router.use('/:id/tasks', getSearchMiddleWare, tasksRouter)
router.use('/:id/squads', getSearchMiddleWare, squadsRouter)

export default router;