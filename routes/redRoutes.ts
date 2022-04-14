import express from 'express';
import { db } from '../index'

export const redRoute = express.Router();

redRoute.get('/red', (req:any, res:any) => {

    db.oneOrNone("select * from quotes where color = 'red' order by RANDOM() limit 1;")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});

// purpleRoute.get('/purple', (req:any, res:any) => {

//     db.manyOrNone("select")
// })