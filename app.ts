import express, {NextFunction, Request, Response} from 'express';
require('express-async-errors');
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import v1router from './routes/v1'
import cors from 'cors';

const app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json({ limit:'50mb'}));
app.use(express.urlencoded({ extended: false , limit:'50mb'}));
app.use(cookieParser());
app.use('/api/v1', v1router)
app.use((err:any, req:Request, res:Response, next:NextFunction) => {
    if (err.message === 'access denied') {
        res.status(403);
        res.json({ error: err.message });
    }

    next(err);
});

export default app;
