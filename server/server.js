require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const dbConnect = require('../db/dbConnect');

const { PORT } = process.env || 3001;

const app = express();
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
