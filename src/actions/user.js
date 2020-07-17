import axios from 'axios';


export const FETCH_USER = 'FETCH_USER';

axios.get('https://rickandmortyapi.com/api/character')
    .then(function (result) {
        YourAction.getAllUsers(result)
    });

export function getAllUsers(request) {
    console.log(request);
    return {
        type: FETCH_USER,
        payload: request
    };
}