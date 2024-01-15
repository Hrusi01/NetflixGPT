import userIcon from "../img/userIcon.jpg"
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from "../utils/userSlice";
import { toggleSearch } from "../utils/searchSlice";
import { supported_language } from "../utils/langConstants";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const showSearch = useSelector((store) => store.search.showSearch)
    const handleSignOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });

    }
    useEffect(() => {
        //a kind of event listener
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ user: uid, email, displayName: displayName }));
                navigate("/browse")
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });
        // unsbscribe when component unmount
        return () => unsubscribe();

    }, []);
    const handleSearchClick = () => {
        dispatch(toggleSearch());

    }
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value)) //updating our store
    }
    return (
        <div className="absolute h-36 justify-between items-center flex w-screen px-4 py-2 bg-gradient-to-b from-black z-10">
            <img className="w-44 mx-8"
                src={require("../img/Logo_ngpt.png")} alt="logo "
            />
            <div className="flex p-2">
                {showSearch && <select className="py-2 px-4 bg-gray-800 text-white m-2" onChange={handleLanguageChange}>
                    {supported_language.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name} </option>)}
                </select>}
                <button
                    className="text-white"
                    onClick={handleSearchClick}
                >
                    {showSearch ? "Home" : "Search"}
                </button>
                <img className=" h-12 w-12" src={userIcon} alt="usericon" />
                <button onClick={handleSignOut} className=" text-white font-bold px-3 justify-center">Sign Out</button>
            </div>

        </div>
    )
}
export default Header