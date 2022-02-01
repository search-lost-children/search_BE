import {NextFunction, Request, Response} from "express";
import usersValidationSchema from "../schemas/users";
import {getConnection, QueryFailedError} from "typeorm";
import Users from "../src/entity/Users";
import schema from "../validationSchemas/newUser";
import Encrypt from "../services/hash";
import Roles from "../src/enums/roles.enum";

 async function registerNewUser (req:Request, res:Response, next:NextFunction) {
     const newUserValidation = schema.validate(req.body);
     if (newUserValidation.error) {
         res.statusCode = 400;
         res.send(newUserValidation.error);
         return
     }
     else{
         const repository = getConnection().getRepository(Users);
         const body = req.body;
         body.password = await Encrypt.cryptPassword(body.password);
         body.role = Roles.user;
         try{
             const savedUser = await repository.save(body);
             delete body.password;
             res.send(savedUser)
         }catch (e: unknown) {
             const error = e as QueryFailedError
             if(error.driverError.code === "23505"){
                 res.status(400);
                 res.send({code:23505, description: "login duplication"})
             } else {
                 res.status(500);
                 res.send(e)
             }
         }
     }
 }

 export default registerNewUser