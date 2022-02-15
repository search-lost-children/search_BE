import express from 'express';
import {createEvent, getEvents} from "../controllers/Event";
const router = express.Router();

router.post('/', createEvent);
router.get('/', getEvents);

export default router;