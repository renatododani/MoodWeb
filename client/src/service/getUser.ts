import axios from 'axios';

export interface User {
    id:number;
    first_name:string;
    last_name:string;
    email:string;
    password:string;
    join_date:string;
}

export function getUser() {
    return axios.get<User|undefined>('https://mood-web-backend.vercel.app/login')
    .then(response => response.data);
}