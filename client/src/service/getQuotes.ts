import axios from 'axios';

export interface Quote {
    id:number;
    color:string;
    quote:string;
    author:string;
}

//Purple component
export function getPurpleQuote() {
    return axios.get<Quote|undefined>('https://mood-web-backend.vercel.app/')
    .then(response => response.data)
}
export function getRedQuote() {

    return axios.get<Quote|undefined>('https://mood-web-backend.vercel.app/')
    .then(response => response.data)
}
export function getOrangeQuote() {

    return axios.get<Quote|undefined>('https://mood-web-backend.vercel.app/')
    .then(response => response.data)
}
export function getYellowQuote() {

    return axios.get<Quote|undefined>('https://mood-web-backend.vercel.app/')
    .then(response => response.data)
}
export function getGreenQuote() {

    return axios.get<Quote|undefined>('https://mood-web-backend.vercel.app/')
    .then(response => response.data)
}
export function getBlueQuote() {

    return axios.get<Quote|undefined>('https://mood-web-backend.vercel.app/')
    .then(response => response.data)
}
export function getBlackQuote() {

    return axios.get<Quote|undefined>('https://mood-web-backend.vercel.app/')
    .then(response => response.data)
}