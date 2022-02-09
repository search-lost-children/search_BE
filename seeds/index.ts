import {createConnection} from "typeorm";
import getUsers, { entity }  from './users.seeds';

createConnection().then(async (connection) => {
    const users = await getUsers()
    await connection.getRepository(entity).save(users)
})