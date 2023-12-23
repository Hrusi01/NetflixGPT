import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVdo: null,
        popularMovies: null,
        trendingMovies: null,
        upcomingMovies: null,
    },
    reducers: {
        addNowPlyingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVdo: (state, action) => {
            state.trailerVdo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        }
    }
});
export const { addNowPlyingMovies, addTrailerVdo, addPopularMovies, addTrendingMovies, addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;