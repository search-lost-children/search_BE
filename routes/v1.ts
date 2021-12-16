import express from 'express';
const router = express.Router();
import Coordinators from "./Coordinators";
import searches from "./Searches";


router.use('/searches', searches);


export default router