import express from 'express';
import { db } from '../index'

export const greenRoute = express.Router();

greenRoute.get('/green', (req:any, res:any) => {

    db.oneOrNone("select * from quotes where color = 'green' order by RANDOM() limit 1;")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});

// purpleRoute.get('/purple', (req:any, res:any) => {

//     db.manyOrNone("select")
// })