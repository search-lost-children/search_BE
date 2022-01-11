import {Request, Response, NextFunction} from "express";
import tableSchema from "../schemas/Coordinators";
import {getConnection} from "typeorm";
import Coordinator from "../src/entity/Coordinator";
import Search from "../src/entity/Search";


export async function getTableInfo(req:Request, res:Response, next:NextFunction){
    const repository = getConnection().getRepository(Coordinator);
    const tableInfo = await repository.find();
    res.send(tableInfo)
    console.log(req)
}

export async function postTableInfo(req:Request, res:Response, next:NextFunction){
    const repository = getConnection().getRepository(Coordinator);
    const body = req.body
    await repository.save(body)
    res.send(body)
}

export async function deleteCoordinator(req:Request, res:Response, next:NextFunction){
    const repository = getConnection().getRepository(Coordinator);
    await getConnection()
    repository.createQueryBuilder()
    repository.delete()
    repository.from(Coordinator)
    repository.where("id = :id", { id: 1 })
    repository.execute();
}




//
// async function tableData (req:Request, res:Response, next:NextFunction) {
//
//     const validationResult = tableSchema.validate(req.body)
//     if(validationResult.error){
//         res.statusCode = 400
//         res.send(validationResult.error)
//         return
//     }
//     res.send(validationResult.value)
// }

