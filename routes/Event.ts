import express from 'express';
import {createEvent, getEvent} from "../controllers/Event";
const router = express.Router();

router.post('/', createEvent);
router.get('/', getEvent);

export default router;