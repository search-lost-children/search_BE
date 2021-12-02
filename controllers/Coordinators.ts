import {Request, Response, NextFunction} from "express";
import tableSchema from "../schemas/Coordinators";


async function getTableInfo(req:Request, res:Response, next:NextFunction){






}


async function tableData (req:Request, res:Response, next:NextFunction) {

    const validationResult = tableSchema.validate(req.body)
    if(validationResult.error){
        res.statusCode = 400
        res.send(validationResult.error)
        return
    }
    res.send(validationResult.value)
}

export default tableData