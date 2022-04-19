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
    return axios.get<Book[]>('/purple-books')
    .then(response => response.data)
}
export function getRedBooks(){
    return axios.get<Book[]>('/red-books')
    .then(response => response.data)
}
export function getOrangeBooks(){
    return axios.get<Book[]>('/orange-books')
    .then(response => response.data)
}
export function getYellowBooks(){
    return axios.get<Book[]>('/yellow-books')
    .then(response => response.data)
}
export function getGreenBooks(){
    return axios.get<Book[]>('/green-books')
    .then(response => response.data)
}
export function getBlueBooks(){
    return axios.get<Book[]>('/blue-books')
    .then(response => response.data)
}
export function getBlackBooks(){
    return axios.get<Book[]>('/black-books')
    .then(response => response.data)
}