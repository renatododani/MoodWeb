import express from 'express';
const bcrypt = require('bcrypt');
import { db } from '../..';

export const loginRoute = express.Router();

loginRoute.get('https://mood-web-backend.vercel.app/login', (req:any, res:any) => {

    db.oneOrNone('SELECT id, email, password FROM users WHERE email = $(email);', {email: req.body.email})
    .then(user => {
        if (!user) {
            return res.status(400).send('Invalid Email or Password');
        }

        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(400).send('Invalid Email or Password');
        }

        return res.json(user);
    });
});