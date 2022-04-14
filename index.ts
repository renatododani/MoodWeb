<<<<<<< HEAD
import express from "express";
import cors from "cors";
import pg from "pg-promise";
import { signupRoutes } from "./routes/auth-routes/signupRoute";
import { loginRoute } from "./routes/auth-routes/loginRoute";
require("dotenv").config();
=======
import express from 'express';
import cors from 'cors';
import pg from 'pg-promise';
import { signupRoutes } from './routes/auth-routes/signupRoute';
import { loginRoute } from './routes/auth-routes/loginRoute';
import { purpleRoute } from './routes/purpleRoutes';
import { redRoute } from './routes/redRoutes';
import { orangeRoute } from './routes/orangeRoutes';
import { yellowRoute } from './routes/yellowRoutes';
import { greenRoute } from './routes/greenRoutes';
import { blackRoute } from './routes/blackRoutes';
import { blueRoute } from './routes/blueRoutes';
require('dotenv').config();
>>>>>>> b225041d49b8fd97ca04c046e8bbb15299fc47db

const app = express();

app.use(cors());
app.use(express.json());
<<<<<<< HEAD
app.use("/", signupRoutes);
app.use("/", loginRoute);
=======
app.use('/', signupRoutes);
app.use('/', loginRoute);
<<<<<<< HEAD
app.use('/', purpleRoute)
>>>>>>> b225041d49b8fd97ca04c046e8bbb15299fc47db
=======
app.use('/', purpleRoute);
app.use('/', redRoute);
app.use('/', orangeRoute);
app.use('/', yellowRoute);
app.use('/', greenRoute);
app.use('/', blackRoute);
app.use('/', blueRoute);
>>>>>>> 468cee45479812186cf1a4a4db6732a7369a8f34

const port = 3050;

export const db = pg()({
<<<<<<< HEAD
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
=======

    host: 'localhost',
    port: 5432,
    user: 'postgres',
<<<<<<< HEAD
    password: '2cshbkukdd',
    database: 'moodwebDB'
>>>>>>> b225041d49b8fd97ca04c046e8bbb15299fc47db
=======
    password: 'mlmlml',
    database: 'MoodWeb'
>>>>>>> 468cee45479812186cf1a4a4db6732a7369a8f34
});

app.listen(port, () =>
  console.log(
    `Listening on port: ${port}. ${process.env.DATABASE_NAME} ${process.env.DATABASE_PASSWORD}`
  )
);
