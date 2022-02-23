import express from 'express';
import {addParticipantToSearch, getAllParticipants} from "../controllers/Participant";
import {adminOnly} from "../controllers/autorization";
const router = express.Router();

router.get('/',adminOnly, getAllParticipants)
router.post('/', addParticipantToSearch)

export default router