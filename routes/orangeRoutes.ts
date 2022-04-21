import express from 'express';
import { db } from '../index'

export const orangeRoute = express.Router();

orangeRoute.get('/orange-quotes', (req:any, res:any) => {

    db.oneOrNone("select * from quotes where color = 'orange' order by RANDOM() limit 1;")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});

orangeRoute.get('/orange-books', (req:any, res:any) => {

    db.manyOrNone("select * from books where color = 'orange' order by RANDOM();")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});


orangeRoute.get('/orange-movies', (req:any, res:any) => {

    db.manyOrNone("select * from movies where color = 'orange' order by RANDOM();")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});
