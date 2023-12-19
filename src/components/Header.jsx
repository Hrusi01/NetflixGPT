import userIcon from "../img/userIcon.jpg"
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });

    }
    return (
        <div className="absolute h-36 justify-between items-center flex w-screen px-4 py-2 bg-gradient-to-b from-black z-10">
            <img className="w-44 mx-8"
                src={require("../img/Logo_ngpt.png")} alt="logo "
            />
            <div className="flex p-2">
                <img className=" h-12 w-12" src={userIcon} alt="usericon" />
                <button onClick={handleSignOut} className="bg-red-700 text-white font-bold px-3 rounded-full justify-center">Sign Out</button>
            </div>
        </div>
    )
}
export default Header