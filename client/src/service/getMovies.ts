import axios from 'axios';

export interface Movie {
    id:number;
    title:string;
    release_year:number;
    color:string;
    img:string;
}

export function getPurpleMovies(){
    return axios.get<Movie[]>('https://mood-web-backend.vercel.app/')
    .then(response => response.data)
}
export function getRedMovies(){
    return axios.get<Movie[]>('https://mood-web-backend.vercel.app/')
    .then(response => response.data)
}
export function getOrangeMovies(){
    return axios.get<Movie[]>('https://mood-web-backend.vercel.app/')
    .then(response => response.data)
}
export function getYellowMovies(){
    return axios.get<Movie[]>('https://mood-web-backend.vercel.app/')
    .then(response => response.data)
}
export function getGreenMovies(){
    return axios.get<Movie[]>('https://mood-web-backend.vercel.app/')
    .then(response => response.data)
}
export function getBlueMovies(){
    return axios.get<Movie[]>('https://mood-web-backend.vercel.app/')
    .then(response => response.data)
}
export function getBlackMovies(){
    return axios.get<Movie[]>('https://mood-web-backend.vercel.app/')
    .then(response => response.data)
}