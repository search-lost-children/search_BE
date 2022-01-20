import {Request, Response, NextFunction} from "express";
import tableSchema from "../schemas/Coordinators";
import {getConnection} from "typeorm";
import Users from "../src/entity/Users";
import Encrypt from "../services/hash";
import Roles from "../src/enums/roles.enum";


// export async function postUserTableInfo(req:Request, res:Response, next:NextFunction){
//     const repository = getConnection().getRepository(Users);
//     const body = req.body
//     body.role = Roles.user
//     body.password = await Encrypt.cryptPassword(body.password);
//     const savedUser = await repository.save(body)
//     delete savedUser.password;
//     res.send(savedUser)
// }


