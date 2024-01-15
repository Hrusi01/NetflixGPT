import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlyingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
    const getNowPlaying = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS); //return some promises
        const json = await data.json();
        dispatch(addNowPlyingMovies(json.results));
    };

    useEffect(() => {
        if (!nowPlayingMovies) getNowPlaying();
    }, [])
}

export default useNowPlayingMovies;