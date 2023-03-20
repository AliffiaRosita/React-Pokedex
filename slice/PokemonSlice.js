import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getPokemon, getPokemonByType} from '../Api';

const initialState = {
    listData: [],
    error: '',
    isLoading: true,
};
export const fetchPokemon = createAsyncThunk('pokemon/get', async () => {
    const response = await getPokemon();
    return response.data.results;
});

export const fetchPokemonByType = createAsyncThunk(
    'pokemon/type/get',
    async ({url}) => {
        const response = await getPokemonByType(url);
        return response.data.pokemon;
    },
);

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPokemon.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchPokemon.fulfilled, (state, action) => {
            state.isLoading = false;
            state.listData = action.payload;
            return state;
        });
        builder.addCase(fetchPokemon.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            return state;
        });
        builder.addCase(fetchPokemonByType.fulfilled, (state, action) => {
            state.isLoading = false;
            state.listData = action.payload;
            return state;
        });
    },
});

export default pokemonSlice.reducer;
