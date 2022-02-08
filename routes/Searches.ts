import express from 'express';
import {getSearches, getSearchMiddleWare} from "../controllers/Searches";
const router = express.Router();
import coordinatesRouter from './Coordinates'
import coordinatorsRouter from './Coordinators'

router.get('/',getSearches);
//api/v1/searches/1
router.use('/:id/coordinators', getSearchMiddleWare, coordinatorsRouter)
router.use('/:id/coordinates', getSearchMiddleWare, coordinatesRouter)

export default router;