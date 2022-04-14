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
app.use('/', purpleRoute)
>>>>>>> b225041d49b8fd97ca04c046e8bbb15299fc47db

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
    password: '2cshbkukdd',
    database: 'moodwebDB'
>>>>>>> b225041d49b8fd97ca04c046e8bbb15299fc47db
});

app.listen(port, () =>
  console.log(
    `Listening on port: ${port}. ${process.env.DATABASE_NAME} ${process.env.DATABASE_PASSWORD}`
  )
);
