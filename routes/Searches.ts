import express from 'express';
import {getSearches, getSearchMiddleWare, createNewSearch, getSearch, updateSearch} from "../controllers/Searches";
const router = express.Router();
import coordinatorsRouter from './Coordinators'
import eventRouter from './Event'
import participantsRouter from './Participants'
import {adminOnly} from "../controllers/autorization";
import tasks from "./Tasks";


router.get('/',getSearches);
router.post('/',adminOnly, createNewSearch);
router.get('/:id', getSearch);
router.put('/:id', getSearchMiddleWare, updateSearch)
router.use('/:id/coordinators', getSearchMiddleWare, coordinatorsRouter);
router.use('/:id/events', getSearchMiddleWare, eventRouter);
router.use('/:id/participants', getSearchMiddleWare, participantsRouter);
router.use('/:id/tasks', getSearchMiddleWare, tasks)

export default router;