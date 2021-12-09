import express from 'express';
const router = express.Router();
import Coordinators from "./Coordinators";
import searches from "./Searches";


router.use('/searches/:id/coordinators', Coordinators)
// router.use('/coordinators', Coordinators)


router.use('/searches', searches);

export default router