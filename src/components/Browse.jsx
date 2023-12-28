import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import Search from "./Search";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useUpcomingMovies();

    const showSearch = useSelector(store => store.search.showSearch)
    return (
        <div className="text-xl bg-black">
            <Header />
            {showSearch ? (
                <Search />
            ) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>

            )}


        </div>
    )
}
export default Browse