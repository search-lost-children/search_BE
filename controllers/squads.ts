import {Request, Response, NextFunction} from "express";
import {getConnection} from "typeorm";
import Squads from "../src/entity/Squads";
import Participants from "../routes/Participants";
import Participant from "../src/entity/Participant";
import Search from "../src/entity/Search";

export async function postTableInfo(req:Request, res:Response, next:NextFunction) {
    const search = req.search as Search;
    const repository = getConnection().getRepository(Squads);
    const participantRepository = getConnection().getRepository(Participant);
    const newSquad = new Squads()
    if(!req.body.coordinatorId) {
        res.status(400)
        return res.send('missing coordinator')
    }
    newSquad.coordinatorId = req.body.coordinatorId;
    newSquad.search = search;

    const squadId = await repository.save(newSquad)

    for (let i = 0; i < req.body.participants.length; i++){
        let participant = await participantRepository.findOne(req.body.participants[i])
        if (participant !== undefined){
            participant.squad = squadId
            await participantRepository.save(participant)
        }else{
            res.status(500)
            res.send("Нет пользователя с таким ID")
            return
        }
    }


    res.send(newSquad)
}

export async function getAllSquads (req:Request, res:Response, next:NextFunction) {
    const search = req.search as Search;
    const repository = getConnection().getRepository(Squads);
    const squads = await repository.find({relations: ['coordinator', 'coordinator.user', 'participants', 'participants.user'], where: {search:{id: search.id}}}) //where: {search:{id: search.id}}, { relations: ['participants', 'coordinator']}
    const mapped = squads.map(squad => ({
        ...squad,
        coordinator: {
            ...squad.coordinator,
            user: {
                firstName: squad.coordinator.user.firstName,
                lastName: squad.coordinator.user.lastName,
                phoneNumber: squad.coordinator.user.phoneNumber
            }
        },
        participants: squad.participants.map(part => ({
            ...part,
            user: {
                firstName: part.user.firstName,
                lastName: part.user.lastName,
                phoneNumber: part.user.phoneNumber
            }
        }))
    }))
    res.send(mapped)
}

export async function deleteSquad (req:Request, res:Response, next:NextFunction) {
    let squadId;
    try {
        squadId = parseInt(req.params.squadId);
    } catch (e) {
        return res.sendStatus(400)
    }

    const repository = getConnection().getRepository(Squads);
    await repository.delete({id: squadId})
    res.send()
}