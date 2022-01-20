import express from 'express';
import {createNewTask, getSearchTasks} from "../controllers/tasks";

const router = express.Router();

router.post('/', createNewTask);
router.get ('/', getSearchTasks);

export default router