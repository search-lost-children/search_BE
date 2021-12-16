import {NextFunction, Response, Request} from "express";
import idValidationSchema from "../schemas/SearchesIdValidation";

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

export function getSearches(req: Request, res: Response, next: NextFunction) {
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
    const validationResult = idValidationSchema.validate(req.params.id)
    if (validationResult.error){
        res.sendStatus(400)
    }
    else{
        const search = findSearch(req.params.id)
        if(!search) {
            res.sendStatus(404)
        }
        else{
            req.search = search
            next()
        }
    }
}




