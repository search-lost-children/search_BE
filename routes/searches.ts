import express from 'express';
import {getSearches} from "../controllers/searches";
import newTaskRouter from "./newTask";

const router = express.Router();

router.get('/',getSearches);

router.use('/:id/newTask', (req, res, next) => {
    next()
}, newTaskRouter)

export default router;