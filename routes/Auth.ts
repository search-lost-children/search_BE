import express from 'express';
import {auth, authGuard, get_user} from '../controllers/autorization';
const router = express.Router();

router.post('/', auth)
router.get('/', authGuard, get_user)

export default router