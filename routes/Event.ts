import express from 'express';
import {createEvent} from "../controllers/Event";
const router = express.Router();

router.post('/', createEvent)

export default router;