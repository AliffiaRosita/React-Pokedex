import axios from 'axios';
const base_url = 'https://pokeapi.co/api/v2';

const config = {
    baseURL: base_url,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
};

export const getPokemonDetail = url => {
    const customConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 10000,
    };
    return axios
        .get(url, customConfig)
        .then(res => res.data)
        .catch(err => err);
};
export const getPokemon = () => {
    return axios.get('/pokemon?offset=1&limit=1000', config);
};
export const getPokemonByType = url => {
    const customConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 10000,
    };
    return axios
        .get(url, customConfig)
        .then(res => res.data)
        .catch(err => err);
};
