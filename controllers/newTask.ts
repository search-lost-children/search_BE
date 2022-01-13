import {NextFunction, Response, Request} from "express";
import router from "../routes/newTask";
import schema from "../validationSchemas/newTask"
import {isError} from "joi";
import {getConnection} from "typeorm";
import SearchNewTask from "../src/entity/SearchNewTask";

export async function createNewTask(req: Request, res: Response, next: NextFunction) {
    const result = schema.validate(req.body);
    if (result.error) {
        res.statusCode = 400
        res.send(result.error)
        return;
    }


        const repository = getConnection().getRepository(SearchNewTask);
        const body = req.body

    const task = new SearchNewTask()
    task.locationType = body.locationType
    task.taskType= body.taskType
        await repository.save(task)
        res.send (task)
}
export default createNewTask;