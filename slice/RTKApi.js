import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://pokeapi.co/api/v2/';
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({baseUrl: ''}),
    endpoints: builder => ({
        getPokemonByName: builder.query({
            query: name => name,
        }),
        getPokemonType: builder.query({
            query: () => `${baseUrl}type`,
        }),
        getPokemonByType: builder.query({
            query: typeId => `${baseUrl}type/${typeId}`,
        }),
    }),
});

export const {
    useGetPokemonByNameQuery,
    useGetPokemonTypeQuery,
    useGetPokemonByTypeQuery,
} = pokemonApi;
