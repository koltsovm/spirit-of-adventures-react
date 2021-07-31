const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');

module.exports = function (app) {
  const { DB_PATH } = process.env;

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(
    session({
      secret: 'keyboard cat',
      resave: true,
      saveUninitialized: false,
      cookie: { secure: false, maxAge: 60000000 },
      store: MongoStore.create({ mongoUrl: DB_PATH }),
    }),
  );

  app.use((req, res, next) => {
    res.locals.email = req.session.email;
    escape.locals.password = req.session.password;
    next();
  });
};
