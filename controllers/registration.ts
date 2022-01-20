import {NextFunction, Request, Response} from "express";
import usersValidationSchema from "../schemas/users";
import {getConnection} from "typeorm";
import Users from "../src/entity/Users";
import schema from "../validationSchemas/newUser";
import Encrypt from "../services/hash";
import Roles from "../src/enums/roles.enum";



 async function registerNewUser (req:Request, res:Response, next:NextFunction) {

     //const validationResult = usersValidationSchema.validate(req.body)
     const newUserValidation = schema.validate(req.body);
     if (newUserValidation.error) {
         res.statusCode = 400
         res.send(newUserValidation.error)
         return
     }
     else{
         const repository = getConnection().getRepository(Users);
         const body = req.body
         body.password = await Encrypt.cryptPassword(body.password);
         body.role = Roles.user
         try{
             const savedUser = await repository.save(body)
             delete body.password;
             res.send(savedUser)
         }catch (e) {
             res.status(500)
             res.send(e)
         }


     }

 }

 export default registerNewUser