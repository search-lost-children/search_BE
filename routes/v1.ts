 import express from 'express';
const router = express.Router();

import {authGuard} from '../controllers/autorization'
import auth from "./Auth"
import reg from "./Registration"

import searches from './searches'

router.use('/auth', auth)
router.use('/registration', reg)
router.use(authGuard);//below the line routes protected by authGuard
router.use('/searches', searches);

export default router