import express from 'express';
import createNewTask from "../controllers/newTask";
const router = express.Router();

router.post('/', createNewTask);


export default router;