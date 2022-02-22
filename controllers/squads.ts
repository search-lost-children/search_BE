import {Request, Response, NextFunction} from "express";
import {getConnection} from "typeorm";
import Squads from "../src/entity/Squads";
import Participants from "../routes/Participants";
import Participant from "../src/entity/Participant";



export async function postTableInfo(req:Request, res:Response, next:NextFunction) {
    const repository = getConnection().getRepository(Squads);
    const participantRepository = getConnection().getRepository(Participant);
    const newSquad = new Squads()
    newSquad.coordinator = req.body.coordinatorId;
    newSquad.participants = req.body.participants;

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