import {NextFunction, Request, Response} from "express";
import usersValidationSchema from "../schemas/users";
import {getConnection} from "typeorm";
import Users from "../src/entity/Users";


function registration() {
 async function tableData (req:Request, res:Response, next:NextFunction) {

     const validationResult = usersValidationSchema.validate(req.body)
     if (validationResult.error) {
         res.statusCode = 400
         res.send(validationResult.error)
         return
     }
     else{
         const repository = getConnection().getRepository(Users);
         const body = req.body
         await repository.save(body)
         res.send(body)
     }

 }

}