import express from 'express';
import {getSearches} from "../controllers/searches";
const router = express.Router();
import router from './Searches'

router.get('/',getSearches);
//api/v1/searches/1/coordinators
router.use('/:id/coordinator', (req:any, res:any, next:any) => {
    req.search = {a:'hello'};
    console.log('/:id/test')
    next()
}, router2)
export default router;