import express from 'express';
import { db } from '../index'

export const yellowRoute = express.Router();

yellowRoute.get('/yellow-quotes', (req:any, res:any) => {

    db.oneOrNone("select * from quotes where color = 'yellow' order by RANDOM() limit 1;")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});

yellowRoute.get('/yellow-books', (req:any, res:any) => {

    db.manyOrNone("select * from books where color = 'yellow' order by RANDOM();")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});

yellowRoute.get('/yellow-movies', (req:any, res:any) => {

    db.manyOrNone("select * from movies where color = 'yellow' order by RANDOM();")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});



