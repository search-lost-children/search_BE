import jwt, {JwtPayload} from 'jsonwebtoken';
import {NextFunction, Request, Response} from "express";


const jwtKey = 'asdasdqwdseragasdfzxfvweg'



function decode (token:string) : JwtPayload {
    return jwt.verify(token, jwtKey) as JwtPayload
}

function sign (data:object) {
    return jwt.sign({
        ...data,
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
    }, jwtKey);
}
function authGuard (req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization');
    if (!token || token === 'null') {
        return res.sendStatus(401);
    }
    try {
        const decoded = decode(token);
        if (decoded.isAuthenticated) {
            req.user = {
                login: decoded.login,
            }
            return next()
        } else {
            return res.sendStatus(401)
        }
    } catch (e) {
        return res.sendStatus(401)
    }
}

export {
    decode,
    sign,
    authGuard
}
