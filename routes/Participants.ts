import express from 'express';
import {getAllParticipants} from "../controllers/Participant";
const router = express.Router();

router.get('/', getAllParticipants)

export default router