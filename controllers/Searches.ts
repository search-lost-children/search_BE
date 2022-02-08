import {NextFunction, Response, Request} from "Express";
import {createConnection, getConnection} from "typeorm"
import idValidationSchema from "../schemas/SearchesIdValidation";
import Search from "../src/entity/Search";

let table: any[] = [{
    "id": 1,
    'firstName': 'Ada',
    'lastName': 'Lovelace',
    'status': 'в процессе',
    },
    {
        "id": 2,
        'firstName': 'Grace',
        'lastName': 'Hopper',
        'status': 'завершен',
    },
    {
        "id": 3,
        'firstName': 'Margaret',
        'lastName': 'Hamilton',
        'status': 'завершен',
    },
    {
        "id": 4,
        'firstName': 'Joan',
        'lastName': 'Clarke',
        'status': 'завершен',
    }]

export async function getSearches(req: Request, res: Response, next: NextFunction) {
    let connection;
    try {
        connection = getConnection();
    } catch {
        connection = await createConnection()
    }
    table = await connection.manager.find(Search)
    res.send(table)
}

async function findSearch(id:string):Promise<object | undefined> {
    const rand = Math.random()
    if (rand > 0.5) {
        return undefined
    } else {
        return {}
    }
}

export async function getSearchMiddleWare(req: Request, res: Response, next: NextFunction) {
    const validationResult = idValidationSchema.validate(req.params)
    if (validationResult.error){
        res.sendStatus(400)
    }
    else{
        let connection;
        try {
            connection = getConnection();
        } catch {
            connection = await createConnection()
        }
        const repo = await connection.getRepository(Search);

        const search = await  repo.findOne({relations: ['coordinators'], where: {id: req.params.id}})
        if(!search) {
            res.sendStatus(404)
        }
        else{
            req.search = search
            next()
        }
    }
}




