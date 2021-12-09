import express, {NextFunction, Request, Response} from 'express';

const router = express.Router();
import jwt from 'jsonwebtoken';

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    const el = {login: '123', password: '123'}

    if (el.login === body.login && el.password === body.password) {

        const token = jwt.sign({login: body.login}, 'shhhhh');
        res.send(token)
    } else {
        res.sendStatus(404)

    }

})

export default router