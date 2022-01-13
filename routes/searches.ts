import express from 'express';
import {getSearches, getSearchMiddleWare} from "../controllers/Searches";
const router = express.Router();
import coordinatorsRouter from './Coordinators'
import newTaskRouter from './newTask'

router.get('/',getSearches);
//api/v1/searches/1/coordinators
router.use('/:id/coordinators', getSearchMiddleWare, coordinatorsRouter)
router.use('/:id/newTask', getSearchMiddleWare, newTaskRouter)


export default router;