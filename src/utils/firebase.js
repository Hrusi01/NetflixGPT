// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC9ixg2QuZnit21GrUmep2wc2EM3AC6wzs",
    authDomain: "netflixgpt-a8707.firebaseapp.com",
    projectId: "netflixgpt-a8707",
    storageBucket: "netflixgpt-a8707.appspot.com",
    messagingSenderId: "1015285649021",
    appId: "1:1015285649021:web:fa54a08a8d4bbfad00eb14",
    measurementId: "G-ZXZ2VCGD50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();