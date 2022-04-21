import axios from 'axios';

export interface Book{
    id:number;
    color:string;
    img: string;
    title: string;
    author:string;
    description: string;
}

export function getPurpleBooks(){
    return axios.get<Book[]>('https://mood-web-backend.vercel.app/purple-books')
    .then(response => response.data)
}
export function getRedBooks(){
    return axios.get<Book[]>('https://mood-web-backend.vercel.app/red-books')
    .then(response => response.data)
}
export function getOrangeBooks(){
    return axios.get<Book[]>('https://mood-web-backend.vercel.app/orange-books')
    .then(response => response.data)
}
export function getYellowBooks(){
    return axios.get<Book[]>('https://mood-web-backend.vercel.app/yellow-books')
    .then(response => response.data)
}
export function getGreenBooks(){
    return axios.get<Book[]>('https://mood-web-backend.vercel.app/green-books')
    .then(response => response.data)
}
export function getBlueBooks(){
    return axios.get<Book[]>('https://mood-web-backend.vercel.app/blue-books')
    .then(response => response.data)
}
export function getBlackBooks(){
    return axios.get<Book[]>('https://mood-web-backend.vercel.app/black-books')
    .then(response => response.data)
}