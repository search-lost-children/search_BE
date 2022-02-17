import {Request, Response, NextFunction} from "express";
import {getConnection, getCustomRepository} from "typeorm";
import Coordinates from "../src/entity/Coordinates";
import Search from "../src/entity/Search";
import User from "../src/entity/Users";
import {CoordinatesRepository} from "../src/repos/CoordinatesRepository"

export async function postMyCoordinates (req:Request, res:Response, next:NextFunction){
    const repository = getConnection().getRepository(Coordinates);
    const body = req.body
    const search = req.search as Search
    const user = req.user as User
    let coordinates = new Coordinates()
    coordinates.lng = body.longitude
    coordinates.lat = body.latitude
    coordinates.searchId = search.id
    coordinates.userId = user.id
    coordinates.time =  new Date()

    await repository.save(coordinates)
    res.send("data received")
}

export async function getMyCoordinates (req:Request, res:Response, next:NextFunction){
    const repository = getConnection().getRepository(Coordinates);
    const user = req.user as User
    let searchDataByUserId = await repository.find({
        where: {
            user: { id: user.id },
        },
        select: ['lng', 'lat', 'time'],
    });
    res.send(searchDataByUserId)
}

export async function getAllCoordinates (req:Request, res:Response, next:NextFunction){
    const search = req.search as Search
    const userRepository = getCustomRepository(CoordinatesRepository);
    const result = await userRepository.findBySearch(search.id);


    res.send(result)
}




