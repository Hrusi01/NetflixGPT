import { useRef } from "react";
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux"
import openai from "../utils/openai"
import { API_OPTIONS } from "../utils/constants";
import { addMovieResult } from "../utils/searchSlice";
const SearchBar = () => {
    const langKey = useSelector((store) => store.config.lang)
    const searchText = useRef(null);

    //search for movie in tmbd
    const searchMovieTMBD = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + " include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        return json.results
    }

    const handleSearchClick = async () => {
        const dispatch = useDispatch
        console.log(searchText.current?.value);
        //making an api call to openai and get movie results
        const searchQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current?.value + ".only give me names of 5 movies, comma separated like the example result given ahead. DExample Result:Animal, Hi Naana, 12th Fail, Koi Mil Gaya, Oppenheimer ";
        const searchResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: searchQuery }],
            model: 'gpt-3.5-turbo',
        });
        console.log(searchResults.choices?.[0]?.message?.content.split(","))

        //search TMBDI movie
        const promiseArray = searchResults.map(movie => searchMovieTMBD(movie));
        const tmbdResults = await Promise.all(promiseArray);
        console.log(tmbdResults)
        dispatch(addMovieResult({ movieNames: searchResults, movieResults: tmbdResults }))
    }
    return <div className="pt-[5%] flex justify-center">
        <form className="w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                className=" p-4 m-4 col-span-9"
                placeholder={lang[langKey]?.searchPlaceholder}
            />
            <button className="col-span-3 m-4 py-2 px-4 bg-violet-500 text-white rounded-lg" onClick={handleSearchClick}> {lang[langKey]?.search} </button>
        </form>
    </div>
};
export default SearchBar