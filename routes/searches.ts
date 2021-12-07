import express from 'express';
import {getSearches} from "../controllers/searches";
const router = express.Router();

router.get('/',getSearches);

export default router;