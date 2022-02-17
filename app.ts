import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
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

export default app;
