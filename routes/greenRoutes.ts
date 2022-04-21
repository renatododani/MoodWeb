import express from 'express';
import { db } from '../index'

export const greenRoute = express.Router();

greenRoute.get('/green-quotes', (req:any, res:any) => {

    db.oneOrNone("select * from quotes where color = 'green' order by RANDOM() limit 1;")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});

greenRoute.get('/green-books', (req:any, res:any) => {

    db.manyOrNone("select * from books where color = 'green' order by RANDOM();")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});

greenRoute.get('/green-movies', (req:any, res:any) => {

    db.manyOrNone("select * from movies where color = 'green' order by RANDOM();")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});