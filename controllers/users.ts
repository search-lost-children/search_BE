import {Request, Response, NextFunction} from "express";
import tableSchema from "../schemas/Coordinators";
import {getConnection} from "typeorm";
import Users from "../src/entity/Users";


export async function postTableInfo(req:Request, res:Response, next:NextFunction){
    const repository = getConnection().getRepository(Users);
    const body = req.body
    await repository.save(body)
    res.send(body)
}


