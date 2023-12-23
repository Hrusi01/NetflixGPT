import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVdo: null,
    },
    reducers: {
        addNowPlyingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVdo: (state, action) => {
            state.trailerVdo = action.payload;
        }
    }
});
export const { addNowPlyingMovies, addTrailerVdo } = moviesSlice.actions;
export default moviesSlice.reducer;