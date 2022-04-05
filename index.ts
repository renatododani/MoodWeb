import express from 'express';
import cors from 'cors';
import pg from 'pg-promise';
import { signupRoutes } from './routes/auth-routes/signupRoute';
import { loginRoute } from './routes/auth-routes/loginRoute';

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
    password: '2cshbkukdd',
    database: 'moodwebDB'
});



app.listen(port, () => console.log(`Listening on port: ${port}`));