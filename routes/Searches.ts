import express from 'express';
import {getSearches, getSearchMiddleWare, createNewSearch, getSearch} from "../controllers/Searches";
const router = express.Router();
import coordinatorsRouter from './Coordinators'
import eventRouter from './Event'
import participantsRouter from './Participants'
import {adminOnly} from "../controllers/autorization";


router.get('/',getSearches);
router.post('/',adminOnly, createNewSearch);
router.get('/:id', getSearch);
//api/v1/searches/1/coordinators
router.use('/:id/coordinators', getSearchMiddleWare, coordinatorsRouter);
router.use('/:id/events', getSearchMiddleWare, eventRouter);
router.use('/:id/participants', getSearchMiddleWare, participantsRouter);
//router.use('/:id/coordinates', getSearchMiddleWare, coordinatesRouter)


export default router;