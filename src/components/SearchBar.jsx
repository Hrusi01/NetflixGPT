import lang from "../utils/langConstants";
import { useSelector } from "react-redux"
const SearchBar = () => {
    const langKey = useSelector((store) => store.config.lang)
    console.log(lang[langKey].search)
    return <div className="pt-[5%] flex justify-center">
        <form className="w-1/2 grid grid-cols-12">
            <input
                type="text"
                className=" p-4 m-4 col-span-9"
                placeholder={lang[langKey]?.searchPlaceholder}
            />
            <button className="col-span-3 m-4 py-2 px-4 bg-violet-500 text-white rounded-lg"> {lang[langKey]?.search} </button>
        </form>
    </div>
};
export default SearchBar