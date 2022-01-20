import express, {NextFunction, Request, Response} from 'express';

const router = express.Router();
import schema from "../validationSchemas/newUser";
import registerNewUser from "../controllers/registration";

router.post('/', registerNewUser)

export default router