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

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', signupRoutes);
app.use('/', loginRoute);
app.use('/', purpleRoute);
app.use('/', redRoute);
app.use('/', orangeRoute);
app.use('/', yellowRoute);
app.use('/', greenRoute);
app.use('/', blackRoute);
app.use('/', blueRoute);

const port = 3050;

export const db = pg()({

    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});



app.listen(port, () => console.log(`Listening on port: ${port}. ${process.env.DATABASE_NAME} ${process.env.DATABASE_PASSWORD}`));