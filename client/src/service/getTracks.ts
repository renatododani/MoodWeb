import axios from 'axios';

export interface Track {
    name:string;
    album: {
        images: [
            {
                url:string;
            }
        ]
    }
    artists:[{
        name:string;
    }]
}

export function getTracksById() {

    return axios.get<Track>('https://api.spotify.com/v1/tracks/1eQBEelI2NCy7AUTerX0KS', {
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_SPOTIFY_API_KEY}`,
            'Content-Type': `application/json`
        }
    });
}