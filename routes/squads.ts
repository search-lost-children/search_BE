import express from 'express';
import {postTableInfo} from "../controllers/squads";

const router = express.Router();

router.post('/', postTableInfo);


export default router