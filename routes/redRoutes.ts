import express from 'express';
import { db } from '../index'

export const redRoute = express.Router();

redRoute.get('/red-quotes', (req:any, res:any) => {

    db.oneOrNone("select * from quotes where color = 'red' order by RANDOM() limit 1;")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});

redRoute.get('/red-books', (req:any, res:any) => {

    db.manyOrNone("select * from books where color = 'red' order by RANDOM();")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});


redRoute.get('/red-movies', (req:any, res:any) => {

    db.manyOrNone("select * from movies where color = 'red' order by RANDOM();")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});
