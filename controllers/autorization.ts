import jwt, {JwtPayload} from 'jsonwebtoken';
import {NextFunction, Request, Response} from "express";
import {getConnection, QueryFailedError} from "typeorm";
import User from "../src/entity/Users";
import Encrypt from "../services/hash";

const jwtKey = 'asdasdqwdseragasdfzxfvweg'

function decode(token: string): JwtPayload {
    return jwt.verify(token, jwtKey) as JwtPayload
}

function sign(data: object) {
    return jwt.sign({
        ...data,
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
    }, jwtKey);
}

async function auth(req: Request, res: Response, next: NextFunction) {
    const body = req.body;
    const repository = getConnection().getRepository(User);
    const userBd = await repository.findOne({login: req.body.login});

    if (userBd === undefined) {
        res.sendStatus(401)

    } else if (await Encrypt.comparePassword(body.password, userBd.password)){
        const token = sign({login: body.login, role: userBd.role, isAuthenticated: true });
        const answer = {token: token, login: body.login, role: userBd.role, isAuthenticated: true}
        res.send(answer)
    } else {
        res.sendStatus(401)
    }
}

export async function get_user (req: Request, res: Response, next: NextFunction) {
    const user  = {
        ...req.user,
        password: undefined
    }
    res.send(user)

}

async function authGuard(req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization');
    const repository = getConnection().getRepository(User);
    if (!token || token === 'null') {
        return res.sendStatus(401);
    }
    try {
        const decoded = decode(token);
        if (decoded.isAuthenticated) {
            const user = await repository.findOne({login: decoded.login})
            req.user = user
            return next()
        } else {
            return res.sendStatus(401)
        }
    } catch (e) {
        return res.sendStatus(401)
    }
}

async function adminOnly(req: Request, res: Response, next: NextFunction) {
     const user = req.user as User
    if( user.role !== 'admin'){
        res.sendStatus(401)
    }else{
       return next()
    }

}
export {
    authGuard,
    auth,
    adminOnly
}
