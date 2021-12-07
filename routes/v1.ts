import express from 'express';
const router = express.Router();

import searches from './searches'

router.use('/searches', searches);

export default router