import express from 'express';
const router = express.Router();
import Coordinators from "./Coordinators";

router.use('/coordinators', Coordinators)

import searches from './searches'

router.use('/searches', searches);

export default router