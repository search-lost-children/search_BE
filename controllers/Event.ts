import {NextFunction, Response, Request} from "Express";
import {getConnection} from "typeorm"
import Event from "../src/entity/Event";
import EventVal from "../schemas/EventVal";

export async function createEvent (req: Request, res: Response, next: NextFunction) {
    const validation = EventVal.validate(req.body);
    if (validation.error) {
        res.sendStatus(400)
    }
    const newEvent = new Event();
    newEvent.priority = req.body.priority;
    newEvent.time = req.body.time;
    newEvent.author = req.body.priority;
    newEvent.description = req.body.description;

    const repository = getConnection().getRepository(Event);
    await repository.save(newEvent);
    res.send(newEvent);

}