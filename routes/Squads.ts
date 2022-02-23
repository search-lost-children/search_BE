import express from 'express';
import {getAllSquads, postTableInfo, deleteSquad} from "../controllers/squads";

const router = express.Router();

router.post('/', postTableInfo);
router.get('/', getAllSquads);
router.delete('/:squadId', deleteSquad);


export default router