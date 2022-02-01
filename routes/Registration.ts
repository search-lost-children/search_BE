import express from 'express';

const router = express.Router();
import registerNewUser from "../controllers/registration";

router.post('/', registerNewUser)

export default router