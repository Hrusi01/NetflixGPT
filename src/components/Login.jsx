import Header from "./Header"
import { useState } from "react"

const Login = () => {
    const [isSignIn, setSignIn] = useState(true);
    const toggleSignInForm = () => {
        setSignIn(!isSignIn);
    }
    return (
        <div  >
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="login-img" />
            </div>
            <form className="absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">

                <h1 className="font-bold text-3xl py-4">{
                    isSignIn ? "Sign In" : "Sign Up"
                }</h1>

                {(!isSignIn &&
                    <input className="p-4 my-4 w-full bg-neutral-700 rounded-md" placeholder="Full Name" type="text" />
                )}

                <input className="p-4 my-4 w-full bg-neutral-700 rounded-md" type="text" placeholder="Email Address" />

                <input className="p-4 my-4 w-full bg-neutral-700 rounded-md" placeholder="Password" type="password" />

                <button className="p-4 my-4 bg-red-700 w-full rounded-md" onClick={toggleSignInForm}>
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