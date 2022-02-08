import {Request, Response, NextFunction} from "express";
import tableSchema from "../schemas/Coordinators";
import {getConnection} from "typeorm";
import Coordinates from "../src/entity/Coordinates";
import Search from "../src/entity/Search";
import User from "../src/entity/Users";

export async function coordinatesDelivery (req:Request, res:Response, next:NextFunction){
    const repository = getConnection().getRepository(Coordinates);
    const body = req.body
    const search = req.search as Search
    // const user = req.user as User
    let coordinates = new Coordinates()
    coordinates.lng = body.longitude
    coordinates.lat = body.latitude
    coordinates.searchId = search.id
    //fixme remove
    const user = await getConnection().getRepository(User).findOneOrFail(1)
    coordinates.userId = user.id
    coordinates.time =  new Date()

    await repository.save(coordinates)

    res.send("data secured")
}





