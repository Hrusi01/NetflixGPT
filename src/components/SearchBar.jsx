import { language } from "../utils/langConstants";

const SearchBar = () => {
    return <div className="pt-[7%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12">
            <input
                type="text"
                className=" p-4 m-4 col-span-9"
                placeholder={language.hindi.searchPlaceholder}
            />
            <button className="col-span-3 m-4 py-2 px-4 bg-violet-500 text-white rounded-lg"> {language.hindi.seach} </button>
        </form>
    </div>
};
export default SearchBar