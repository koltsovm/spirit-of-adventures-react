require('dotenv').config();
import express, { Express } from 'express';
import cors from 'cors';
import logger from 'morgan';
import dbConnect from './src/configs/db.config.js';

const { PORT } = process.env ?? 3001;

const app: Express = express();
dbConnect();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log('Server has been started'));

module.exports = app;
