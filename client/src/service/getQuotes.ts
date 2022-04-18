import axios from 'axios';

export interface Quote {
    id:number;
    color:string;
    quote:string;
    author:string;
}

export interface Books{
    id:number;
    color:string;
    img: string;
    title: string;
    author:string;
    description: string;
}

export interface Movies {
    id:number;
    title:string;
    release_year:number;
    color:string;
    img:string;
}

//Purple component
export function getPurpleQuote() {
    return axios.get<Quote|undefined>('/purple')
    .then(response => response.data)
}
// export function getPurpleBooks(){
//     return axios.get<Books|undefined>('/purple')
//     .then(response => response.data)
// }
// export function getPurpleMovies(){
//     return axios.get<Movies|undefined>('/purple')
//     .then(response => response.data)
// }




export function getRedQuote() {

    return axios.get<Quote|undefined>('/red')
    .then(response => response.data)
}
export function getOrangeQuote() {

    return axios.get<Quote|undefined>('/orange')
    .then(response => response.data)
}
export function getYellowQuote() {

    return axios.get<Quote|undefined>('/yellow')
    .then(response => response.data)
}
export function getGreenQuote() {

    return axios.get<Quote|undefined>('/green')
    .then(response => response.data)
}
export function getBlueQuote() {

    return axios.get<Quote|undefined>('/blue')
    .then(response => response.data)
}
export function getBlackQuote() {

    return axios.get<Quote|undefined>('/black')
    .then(response => response.data)
}