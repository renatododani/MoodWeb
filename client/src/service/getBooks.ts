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
    return axios.get<Book|undefined>('/red')
    .then(response => response.data)
}
export function getOrangeBooks(){
    return axios.get<Book|undefined>('/orange')
    .then(response => response.data)
}
export function getYellowBooks(){
    return axios.get<Book|undefined>('/yellow')
    .then(response => response.data)
}
export function getGreenBooks(){
    return axios.get<Book|undefined>('/green')
    .then(response => response.data)
}
export function getBlueBooks(){
    return axios.get<Book|undefined>('/blue')
    .then(response => response.data)
}
export function getBlackBooks(){
    return axios.get<Book|undefined>('/black')
    .then(response => response.data)
}