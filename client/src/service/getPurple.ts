import axios from 'axios';

export interface Quote {
    id:number;
    color:string;
    quote:string;
    author:string;
}

export function getPurpleQuote() {

    return axios.get<Quote>('/purple')
    .then(response => response.data)
}