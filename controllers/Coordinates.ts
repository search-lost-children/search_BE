import {Request, Response, NextFunction} from "express";
import tableSchema from "../schemas/Coordinators";
import {getConnection} from "typeorm";
import Coordinator from "../src/entity/Coordinator";
import Search from "../src/entity/Search";


export async function coordinatesDelivery (req:Request, res:Response, next:NextFunction){
    const repository = getConnection().getRepository(Coordinator);
    const body = req.body
    await repository.save(body)
    res.send(body)

}





