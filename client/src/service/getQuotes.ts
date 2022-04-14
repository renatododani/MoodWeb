import axios from 'axios';

export interface Quote {
    id:number;
    color:string;
    quote:string;
    author:string;
}

export function getPurpleQuote() {

    return axios.get<Quote|undefined>('/purple')
    .then(response => response.data)
}

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