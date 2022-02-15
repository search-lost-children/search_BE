import {Request, Response, NextFunction} from "express";
import {getConnection} from "typeorm";
import Squads from "../src/entity/Squads";



export async function postTableInfo(req:Request, res:Response, next:NextFunction) {
    const repository = getConnection().getRepository(Squads);
    const body = req.body
    await repository.save(body)
    res.send(body)
}