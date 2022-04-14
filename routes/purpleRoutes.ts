import express from 'express';
import { db } from '../index'

export const purpleRoute = express.Router();

purpleRoute.get('/purple', (req:any, res:any) => {

    db.oneOrNone("select * from quotes where color = 'purple' order by RANDOM() limit 1;")
    .then(data => res.json(data))
    .catch(error => console.log(error));
});

// purpleRoute.get('/purple', (req:any, res:any) => {

//     db.manyOrNone("select")
// })