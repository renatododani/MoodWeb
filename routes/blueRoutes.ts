import express from 'express';
import { db } from '../index'

export const blueRoute = express.Router();

blueRoute.get('/blue', (req:any, res:any) => {

    db.oneOrNone("select * from quotes where color = 'blue' order by RANDOM() limit 1;")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});

blueRoute.get('/blue', (req:any, res:any) => {

    db.manyOrNone("select * from books where color = 'blue' order by RANDOM() ;")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});

blueRoute.get('/blue', (req:any, res:any) => {

    db.oneOrNone("select * from movies where color = 'blue' order by RANDOM();")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});

