import {NextFunction, Request, Response} from "express";
import Search from "../src/entity/Search";
import {getConnection} from "typeorm";
import {Participant} from "../src/entity/Participant";
import User from "../src/entity/Users";

export async function getAllParticipants (req:Request, res:Response, next:NextFunction) {
    const search = req.search as Search;

    try{
        let participants = await getConnection().getRepository(Participant).find({relations: ['user'], where: {search}})
        const mappedParticipants = participants.map((participant) => {
            return {
                ...participant,
                user: {
                    firstName: participant.user.firstName,
                    lastName: participant.user.lastName,
                    phoneNumber: participant.user.phoneNumber
                }
            }
        })
        res.json(mappedParticipants)
    } catch (e) {
        next(e)
    }
}

export async function addParticipantToSearch (req:Request, res:Response, next:NextFunction) {
    const search = req.search as Search;
    const user = req.user as User;

    const repo = await getConnection().getRepository(Participant);
    const participant = new Participant();
    participant.search = search;
    participant.user = user;

    try {
        await repo.save(participant)
        res.sendStatus(200)
    } catch (e) {
        next(e)
    }
}