import {Request, Response, NextFunction} from "express";
import tableSchema from "../schemas/Coordinators";
import {getConnection} from "typeorm";
import Coordinator from "../src/entity/Coordinator";
import Search from "../src/entity/Search";
import User from "../src/entity/Users";
import Participant from "../src/entity/Participant";

export async function getCoordinators(req:Request, res:Response, next:NextFunction){
    const search = req.search as Search;
    const repository = getConnection().getRepository(Coordinator);
    const coordinators = await repository.find({where: {search:search}, relations: ['user']});
    const mappedCoordinators = coordinators.map(coord => ({
        ...coord,
        user: {
            firstName: coord.user.firstName,
            lastName: coord.user.lastName,
            phoneNumber: coord.user.phoneNumber
        }
    }))
    res.send(mappedCoordinators)
}

export async function addCoordinator (req:Request, res:Response, next:NextFunction){
    const search =req.search as Search;
    const repository = getConnection().getRepository(Coordinator);
    const coordinator = new Coordinator();
    coordinator.search = search;
    coordinator.user = (await getConnection().getRepository(Participant).findOneOrFail({where: {id: req.body.participantId}, relations:['user']})).user
    await repository.save(coordinator)
    res.send()
}

export async function deleteCoordinator(req:Request, res:Response, next:NextFunction){
    const repository = await getConnection().getRepository(Coordinator);
    await repository.createQueryBuilder().delete().from(Coordinator).where("id = :coordinatorId", { coordinatorId: req.params.coordinatorId }).execute();
    res.send()
}