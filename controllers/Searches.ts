import {NextFunction, Response, Request} from "Express";
import {createConnection, getConnection} from "typeorm"
import idValidationSchema from "../schemas/SearchesIdValidation";
import Search from "../src/entity/Search";
import newSearchValidation from "../schemas/NewSearch";
import Event from "../src/entity/Event";
import {isArray} from "util";
import User from "../src/entity/Users";

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
    const repository = getConnection().getRepository(Search);
    const options = {
        where: {},
        relations: []
    };
    if(req.query.status !== undefined) {
        options.where = {
            status: req.query.status
        }
    }
    if(req.query.relations !== undefined) {
        const rel = req.query.relations;
        if(Array.isArray(rel)) {
            res.status(400)
            res.send('many relations doesnt support now')
            return
            // @ts-ignore
            options.relations = rel as string[]
        } else {
            if (rel !== 'participants') {
                res.status(400)
                res.send('Just participants relation supports for now')
                return
            }

            // @ts-ignore
            options.relations.push(rel as string)
        }
    }


    const data = await repository.find(options)
    const mapped = data.map(search => {
        const _search = {
            ...search,
            photo: search.photo.toString()
        }
        if(search.participants){
            const user = req.user as User;
            search.participants = search.participants.filter((participant)=> participant.userId === user.id)
        }
        return _search
    })
    res.send(mapped)
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
    newSearch.photo = Buffer.from(req.body.photo);

    const repository = getConnection().getRepository(Search);
    await repository.save(newSearch);

    res.send(newSearch);
}

export async function getSearch (req: Request, res: Response, next: NextFunction) {
    const repository = getConnection().getRepository(Search);
    const searchInfo = await repository.findOne(req.params.id);
    const _searchInfo = {
        ...searchInfo,
        photo: searchInfo?.photo.toString()
    }
    res.send(_searchInfo)
}