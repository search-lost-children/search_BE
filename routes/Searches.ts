import express from 'express';
import {getSearches, getSearchMiddleWare, createNewSearch, getSearch} from "../controllers/Searches";
const router = express.Router();
import coordinatesRouter from './Coordinates'
import coordinatorsRouter from './Coordinators'
import eventRouter from './Event'
import participantsRouter from './Participants'

router.get('/',getSearches);
router.post('/', createNewSearch);
router.get('/:id', getSearch);
//api/v1/searches/1/coordinators
router.use('/:id/coordinators', getSearchMiddleWare, coordinatorsRouter);
router.use('/:id/events', getSearchMiddleWare, eventRouter);
router.use('/:id/participants', getSearchMiddleWare, participantsRouter);
//router.use('/:id/coordinates', getSearchMiddleWare, coordinatesRouter)

//api/v1/searches/1
router.use('/:id/coordinates', getSearchMiddleWare, coordinatesRouter)

export default router;