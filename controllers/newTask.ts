import {NextFunction, Response, Request} from "express";
import router from "../routes/newTask";
import schema from "../validationSchemas/newTask"
import {isError} from "joi";

export function createNewTask(req: Request, res: Response, next: NextFunction) {
    const result = schema.validate(req.body);
    if (result.error) {
        res.statusCode = 400
        res.send(result.error)
        return;
    }
    res.send(result.value)

}
export default createNewTask;