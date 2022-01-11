import express, {NextFunction, Request, Response} from 'express';

const router = express.Router();
import schema from "../validationSchemas/newUser";

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const newUserValidation = schema.validate(req.body);

    if (newUserValidation.error) {
        res.sendStatus(400)
    } else {
        res.sendStatus(200)
    }
})

export default router