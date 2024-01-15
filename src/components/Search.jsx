import SearchBar from "./SearchBar"
import { BG_URL } from "../utils/constants"
import SearchSuggestion from "./SearchSuggestion"
const Search = () => {
    return (
        <div className="">
            <div className="absolute -z-20 bg-fixed">
                <img src={BG_URL} />
            </div>
            <SearchBar />
            <SearchSuggestion />
            movie suggestions
        </div>
    )
}
export default Search