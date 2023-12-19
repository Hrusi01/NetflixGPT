import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import Header from "./Header"
import { useDispatch } from "react-redux";
import { addNowPlyingMovies } from "../utils/moviesSlice";

const Browse = () => {

    const dispatch = useDispatch();

    const getNowPlaying = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS); //return some promises
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlyingMovies(json.results));
    };

    useEffect(() => {
        getNowPlaying();
    }, [])

    return (
        <div className="text-xl">
            <Header />
        </div>
    )
}
export default Browse