import { useSelector } from "react-redux"
import MovieList from "../components/MovieList"
const SearchSuggestion = () => {

    const search = useSelector((store) => store.search);
    const { movieResults, movieNames } = search;
    if (!movieNames) return null;

    return (
        <div className="p-4 m-4 bg-black bg-opacity-90 text-white">
            <div>
                <MovieList />
            </div>
        </div>
    )
}
export default SearchSuggestion