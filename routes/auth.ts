import express, {NextFunction, Request, Response} from 'express';
const router = express.Router();
import array from "../db/users_db";

router.post( '/',(req:Request, res:Response, next:NextFunction)=>{
    const elem =req.body;
    const el = {login: '123', password: '123'}

            if(el.login=== elem.login && el.password === elem.password){
                res.sendStatus(200)
            }else{
                res.sendStatus(404)
            }

})

export default router