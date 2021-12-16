import {Request, Response, NextFunction} from "express";
import tableSchema from "../schemas/Coordinators";

let tableInfo:any[] = ["go home"]



export async function getTableInfo(req:Request, res:Response, next:NextFunction){
    res.send(tableInfo)
    console.log(req)
}

export async function postTableInfo(req:Request, res:Response, next:NextFunction){
    const body = req.body
    tableInfo = body
    res.send(tableInfo)
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

