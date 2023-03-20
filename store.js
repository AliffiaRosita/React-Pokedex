import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from './slice/CounterSlice';
import PokemonReducer from './slice/PokemonSlice';
import {pokemonApi} from './slice/RTKApi';

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        pokemon: PokemonReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(pokemonApi.middleware);
    },
});
