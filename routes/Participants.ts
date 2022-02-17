import express from 'express';
import {getAllParticipants} from "../controllers/Participant";
import {adminOnly} from "../controllers/autorization";
const router = express.Router();

router.get('/',adminOnly, getAllParticipants)

export default router