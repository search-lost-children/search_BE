import {NextFunction, Response, Request} from "express";
import schema from "../validationSchemas/newTask"
import {getConnection} from "typeorm";
import Task from "../src/entity/Task";
import Search from "../src/entity/Search";

export async function createNewTask(req: Request, res: Response, next: NextFunction) {
    const result = schema.validate(req.body);
    if (result.error) {
        res.statusCode = 400
        res.send(result.error)
        return;
    }

    const repository = getConnection().getRepository(Task);
    const body = req.body

    const task = new Task()
    task.locationType = body.locationType
    task.taskType= body.taskType
    task.search = req.search as Search
    task.location = body.location
    task.executorId = body.executorId
    await repository.save(task)
    res.send (task)
}

export async function getSearchTasks (req: Request, res: Response, next: NextFunction){
    const repository = getConnection().getRepository(Task);
    const tableInfo = await repository.find({ where: { search: req.search} });
    res.send(tableInfo)
}


