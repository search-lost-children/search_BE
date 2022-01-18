import express, {NextFunction, Request, Response} from 'express';
import {createNewTask, getSearchTasks} from "../controllers/tasks";
import {getConnection} from "typeorm";
import SearchNewTask from "../src/entity/SearchNewTask";
const router = express.Router();

router.post('/', createNewTask);
router.get ('/',getSearchTasks );


export default router;