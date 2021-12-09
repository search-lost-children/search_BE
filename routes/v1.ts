import express from 'express';
const router = express.Router();
import auth from "./auth"
import reg from "./reg"

router.use('/auth', auth)
router.use('/reg', reg)

export default router