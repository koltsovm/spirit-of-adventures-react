require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const dbConnect = require('./db/dbConnect');
const useMiddleware = require('./middleware/index');

const authRouter = require('./routes/auth');

const { PORT } = process.env || 3001;

const app = express();
dbConnect();
useMiddleware(app);

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(logger('dev'));

app.use('/', authRouter);

app.listen(PORT, () => console.log('Server has been started'));
