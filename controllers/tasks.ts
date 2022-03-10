import {NextFunction, Request, Response} from "express";
import schema from "../validationSchemas/newTask"
import {getConnection} from "typeorm";
import Task from "../src/entity/Task";
import Search from "../src/entity/Search";
import TaskTypes from "../src/enums/taskTypes.enum";
import Roles from "../src/enums/roles.enum";
import User from "../src/entity/Users";
import Participant from "../src/entity/Participant";
import Squad from "../src/entity/Squads";

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
    task.location = JSON.stringify(body.location)
    if(body.taskType === TaskTypes.group) {
        task.squadId = body.executorId
    } else {
        task.participantId = body.executorId
    }
    await repository.save(task)
    res.send (task)
}

export async function getSearchTasks (req: Request, res: Response, next: NextFunction) {
    const squadsRepo = getConnection().getRepository(Squad);
    const participantRepo = getConnection().getRepository(Participant);
    const repository = getConnection().getRepository(Task);
    const user = req.user as User;
    const search = req.search as Search;
    let options;
    if (user.role === Roles.admin) {
        options = { where: { search } };
        const tasks = await repository.find(options);
        res.send(tasks)
    } else {
        // const [squad, participant] = await Promise.all([
        //     squadsRepo.find({where: {se}})
        // ])
        const participant = await participantRepo.findOne({where: {search, user}, relations:['squad', 'squad.tasks','tasks']})
        if(!participant) {
            res.status(400)
            return res.send('participant not found')
        }
        let tasksFromParticipant: Task[] = [];
        let tasksFromSquad: Task[] = [];
        if (participant.tasks) {
            tasksFromParticipant = participant.tasks
        }
        if (participant?.squad?.tasks) {
            tasksFromSquad = participant.squad.tasks
        }
        const tasks = [
            ...tasksFromParticipant,
            ...tasksFromSquad
        ]
        res.send(tasks)
    }

}


