import express from 'express';
import {getSearches, getSearchMiddleWare, createNewSearch} from "../controllers/Searches";
const router = express.Router();
import coordinatorsRouter from './Coordinators'
import eventRouter from './Event'

router.get('/',getSearches);
//api/v1/searches/1/coordinators
router.use('/:id/coordinators', getSearchMiddleWare, coordinatorsRouter);
router.use('/:id/events', getSearchMiddleWare, eventRouter);
router.post('/', createNewSearch)

export default router;