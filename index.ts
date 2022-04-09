import express from 'express';
import cors from 'cors';
import pg from 'pg-promise';
import { signupRoutes } from './routes/auth-routes/signupRoute';
import { loginRoute } from './routes/auth-routes/loginRoute';
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', signupRoutes);
app.use('/', loginRoute);

const port = 3050;

export const db = pg()({

    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});



app.listen(port, () => console.log(`Listening on port: ${port}. ${process.env.DATABASE_NAME} ${process.env.DATABASE_PASSWORD}`));