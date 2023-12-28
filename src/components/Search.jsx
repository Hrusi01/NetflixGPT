import SearchBar from "./SearchBar"
import { BG_URL } from "../utils/constants"

const Search = () => {
    return (
        <div className="">
            <div className="absolute -z-20">
                <img src={BG_URL} />
            </div>
            <SearchBar />
            movie suggestions
        </div>
    )
}
export default Search