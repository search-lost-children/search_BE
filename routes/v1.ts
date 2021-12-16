import express from 'express';

const router = express.Router();
import auth from "./auth"
import reg from "./reg"

router.use('/auth', auth)
router.use('/reg', reg)

import searches from './searches'

router.use('/searches', searches);

export default router