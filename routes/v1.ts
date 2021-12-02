import express from 'express';
const router = express.Router();
import Coordinators from "./Coordinators";

router.use('/coordinators', Coordinators)

export default router