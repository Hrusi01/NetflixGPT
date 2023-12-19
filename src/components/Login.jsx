import Header from "./Header"
import { useState } from "react"
import { checkValidData } from "../utils/validate";
import { useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
const Login = () => {
    const [isSignIn, setSignIn] = useState(true);
    const [errMsg, setErrMsg] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setSignIn(!isSignIn);
    }

    const handleButtonClick = () => {
        //validate form
        const msg = checkValidData(email.current.value, password.current.value);
        setErrMsg(msg);

        //sign/sign up
        if (msg) return;
        //create user in db or signin/sign up
        if (!isSignIn) {
            //sign UP logic 
            createUserWithEmailAndPassword(auth,
                email.current.value,
                password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current,
                        photoURL: "https://avatars.githubusercontent.com/u/88570040?v=4"
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatchEvent(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL,
                            })
                        )
                    }).catch((error) => {
                        // An error occur
                        setErrMsg(error.msg);
                    });
                    console.log(user);
                    //push this user info to store
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(errorCode + '-' + errorMessage);
                });
        }
        else {
            //Sign In logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(errorCode + '-' + errorMessage)
                });

        }
    }
    return (
        <div  >
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="login-img" />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">

                <h1 className="font-bold text-3xl py-4">{
                    isSignIn ? "Sign In" : "Sign Up"
                }</h1>

                {(!isSignIn &&
                    <input className="p-4 my-4 w-full bg-neutral-700 rounded-md" placeholder="Full Name" type="text" />
                )}

                <input
                    ref={email}
                    className="p-4 my-4 w-full bg-neutral-700 rounded-md" type="text" placeholder="Email Address" />

                <input
                    ref={password}
                    className="p-4 my-4 w-full bg-neutral-700 rounded-md" placeholder="Password" type="password" />
                <p className="text-red-600 text-lg">{errMsg}</p>
                <button
                    className="p-4 my-4 bg-red-700 w-full rounded-md"
                    onClick={handleButtonClick}>
                    {
                        isSignIn ? "Sign In" : "Sign Up"
                    }
                </button>
                <p className="py-2 my-4 cursor-pointer " onClick={toggleSignInForm}>
                    {
                        isSignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."
                    }
                </p>
            </form>
        </div>
    )
}
export default Login