import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
    return (
        <div className="-mt-64 relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />

            <MovieList title={"Trending Movies"} movies={movies.trendingMovies} />

            <MovieList title={"Popular Movies"} movies={movies.popularMovies} />

            <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />


        </div>
    )
}
export default SecondaryContainer