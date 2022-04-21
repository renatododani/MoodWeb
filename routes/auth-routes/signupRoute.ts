import express from 'express';
const bcrypt = require('bcrypt');
import { db } from '../..';

const saltRounds = 10;

export const signupRoutes = express.Router();

signupRoutes.post('https://mood-web-backend.vercel.app/signup', (req:any, res:any) => {

    const hash = bcrypt.hashSync(req.body.password, saltRounds)

    const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hash
    }

    db.oneOrNone('SELECT id, email FROM users WHERE email = $(email);', {email: req.body.email})
    .then(user => {
        if(user) {
            return res.status(400).send('Email already in use');
        }

        db.one('INSERT INTO users (first_name, last_name, email, password) VALUES ($(first_name), $(last_name), $(email), $(password)) RETURNING id, first_name, last_name, email, password;', newUser)
        .then(data => res.json(data));
    });

});