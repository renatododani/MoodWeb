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
    return axios.get<Book|undefined>('/purple')
    .then(response => response.data)
}
export function getRedBooks(){
    return axios.get<Book|undefined>('/purple')
    .then(response => response.data)
}
export function getOrangeBooks(){
    return axios.get<Book|undefined>('/purple')
    .then(response => response.data)
}
export function getYellowBooks(){
    return axios.get<Book|undefined>('/purple')
    .then(response => response.data)
}
export function getGreenBooks(){
    return axios.get<Book|undefined>('/purple')
    .then(response => response.data)
}
export function getBlueBooks(){
    return axios.get<Book|undefined>('/purple')
    .then(response => response.data)
}
export function getBlackBooks(){
    return axios.get<Book|undefined>('/purple')
    .then(response => response.data)
}