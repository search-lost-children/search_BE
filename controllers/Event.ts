import {NextFunction, Response, Request} from "Express";
import {getConnection} from "typeorm"
import Event from "../src/entity/Event";
import EventVal from "../schemas/EventVal";
import User from "../src/entity/Users";
import Search from "../src/entity/Search";
import Coordinator from "../src/entity/Coordinator";

export async function createEvent (req: Request, res: Response, next: NextFunction) {
    const validation = EventVal.validate(req.body);
    if (validation.error) {
        res.statusCode = 400;
        res.send(validation.error)
        return
    }
    // const user = req.user as User;
    const search = req.search as Search;
    const newEvent = new Event();

    newEvent.priority = req.body.priority;
    newEvent.time = req.body.time;
    // fixme remove after AUTH is fixed
    const user = await getConnection().getRepository(User).findOneOrFail(1)
    newEvent.author = user;
    newEvent.search = search;
    newEvent.description = req.body.description;

    const repository = getConnection().getRepository(Event);
    await repository.save(newEvent);
    res.send(newEvent);
}

export async function getEvent (req: Request, res: Response, next: NextFunction) {
        const repository = getConnection().getRepository(Event);
    const search = req.search as Search;

    const eventInfo = await repository.find({ where: {search: search}});
        res.send(eventInfo)
        console.log(req)
}