import {NextFunction, Request, Response} from "express";
import Search from "../src/entity/Search";
import {getConnection} from "typeorm";
import {Participant} from "../src/entity/Participant";

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