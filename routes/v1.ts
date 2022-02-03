import express from 'express';
const router = express.Router();

import {authGuard} from '../controllers/autorization'
import auth from "./auth"
import reg from "./reg"
import searches from './Searches'
import coordinates from "./Coordinates";

router.use('/auth', auth)
router.use('/reg', reg)
router.use(authGuard);//below the line routes protected by authGuard
router.use('/searches', searches);
router.use

export default router