import express from 'express';
import {getSearches, getSearchMiddleWare, createNewSearch, getSearch} from "../controllers/Searches";
const router = express.Router();
import coordinatorsRouter from './Coordinators'
import eventRouter from './Event'

router.get('/',getSearches);
router.post('/', createNewSearch);
router.get('/:id', getSearch);
//api/v1/searches/1/coordinators
router.use('/:id/coordinators', getSearchMiddleWare, coordinatorsRouter);
router.use('/:id/events', getSearchMiddleWare, eventRouter);
//router.use('/:id/coordinates', getSearchMiddleWare, coordinatesRouter)


export default router;