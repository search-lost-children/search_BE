import {EntityRepository, Repository} from "typeorm";
import Coordinates from "../entity/Coordinates";


@EntityRepository(Coordinates)
export class CoordinatesRepository extends Repository<Coordinates> {

    async findBySearch(searchId:number) {
        return await this.query(
        `
  SELECT "userId", userDB."firstName", userDB."lastName", lng, lat, "time"
\tFROM public.coordinates
\tLEFT JOIN public.user as userDB ON userDB.id = "userId"
\tWHERE "searchId" = $1;
  `, [searchId])}

}