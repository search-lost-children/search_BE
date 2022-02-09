import {NextFunction, Response, Request} from "Express";
import {createConnection, getConnection} from "typeorm"
import idValidationSchema from "../schemas/SearchesIdValidation";
import Search from "../src/entity/Search";
import newSearchValidation from "../schemas/NewSearch";
import Event from "../src/entity/Event";

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

export async function getSearchMiddleWare(req: Request, res: Response, next: NextFunction) {
    const validationResult = idValidationSchema.validate(req.params)
    if (validationResult.error) {
        res.sendStatus(400)
    } else {
        let connection;
        try {
            connection = getConnection();
        } catch {
            connection = await createConnection()
        }
        const repo = await connection.getRepository(Search);

        const search = await repo.findOne({relations: ['coordinators'], where: {id: req.params.id}})
        if (!search) {
            res.sendStatus(404)
        } else {
            req.search = search
            next()
        }
    }
}

export async function createNewSearch(req: Request, res: Response, next: NextFunction) {
    const validation = newSearchValidation.validate(req.body)
    if (validation.error) {
        res.statusCode = 400;
        res.send(validation.error)
        return
    }
    const newSearch = new Search();
    newSearch.firstName = req.body.firstName;
    newSearch.lastName = req.body.lastName;
    newSearch.date = req.body.date;
    newSearch.coordLat = req.body.coordinates.latitude;
    newSearch.coordLong = req.body.coordinates.longitude;
    newSearch.address = req.body.address;
    newSearch.info = req.body.info;
    newSearch.photo = req.body.photo;

    const repository = getConnection().getRepository(Search);
    await repository.save(newSearch);

    res.send(newSearch);
}

export async function getSearch (req: Request, res: Response, next: NextFunction) {
    const repository = getConnection().getRepository(Search);
    const searchInfo = await repository.findOne(req.params.id);
    res.send(searchInfo)
    console.log(req)
}