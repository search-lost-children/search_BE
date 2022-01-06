import express, {NextFunction, Request, Response} from 'express';
import {sign} from '../controllers/autorization';
const router = express.Router();
import jwt from 'jsonwebtoken';






router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    const el = {login: '123', password: '123'}

    if (el.login === body.login && el.password === body.password) {

        const token = sign({login: body.login, isAuthenticated: true});
        res.send(token)
    } else {
        res.sendStatus(404)

    }

})

export default router