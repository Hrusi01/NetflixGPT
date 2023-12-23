import MovieCard from "./MovieCard"
const MovieList = ({ title, movies }) => {
    return (
        <div>
            <div className="px-10 text-white">
                <h1 className="text-3xl py-2">
                    {title}
                </h1>
                <div className="flex overflow-x-scroll scrollbar-hide">
                    <div className="flex">
                        {
                            movies?.map(movie =>
                                (<MovieCard key={movie.id} posterPath={movie.poster_path} />)
                            )

                        }
                    </div>
                </div>

            </div>

        </div>
    )
}
export default MovieList