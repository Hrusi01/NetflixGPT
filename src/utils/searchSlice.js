import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        showSearch: false,
        moviesNames: null,
        movieResults: null
    },
    reducers: {
        toggleSearch: (state) => {
            state.showSearch = !state.showSearch;
        },
        addMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.moviesNames = movieNames;
            state.movieResults = movieResults;
        }
    }
});

export const { toggleSearch, addMovieResult } = searchSlice.actions;
export default searchSlice.reducer;