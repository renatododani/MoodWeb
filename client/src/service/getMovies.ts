import axios from 'axios';

export interface Movie {
    id:number;
    title:string;
    release_year:number;
    color:string;
    img:string;
}

export function getPurpleMovies(){
    return axios.get<Movie[]>('/purple-movies')
    .then(response => response.data)
}
export function getRedMovies(){
    return axios.get<Movie[]>('/red-movies')
    .then(response => response.data)
}
export function getOrangeMovies(){
    return axios.get<Movie[]>('/orange-movies')
    .then(response => response.data)
}
export function getYellowMovies(){
    return axios.get<Movie[]>('/yellow-movies')
    .then(response => response.data)
}
export function getGreenMovies(){
    return axios.get<Movie[]>('/green-movies')
    .then(response => response.data)
}
export function getBlueMovies(){
    return axios.get<Movie[]>('/blue-movies')
    .then(response => response.data)
}
export function getBlackMovies(){
    return axios.get<Movie[]>('/black-movies')
    .then(response => response.data)
}