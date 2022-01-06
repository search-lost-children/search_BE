import express from 'express';
import {authGuard} from '../controllers/autorization'
import auth from "./auth"
import reg from "./reg"
import searches from './searches'

const router = express.Router();

router.use('/auth', auth)
router.use('/reg', reg)
router.use(authGuard);//below the line routes protected by authGuard
router.use('/searches', searches);

export default router