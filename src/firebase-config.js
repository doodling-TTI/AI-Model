// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // 코드 추가

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcdyfd2OcwQp6iwmIIdKixs9MWjfHghP0",
    authDomain: "fir-test-ed185.firebaseapp.com",
    projectId: "fir-test-ed185",
    storageBucket: "fir-test-ed185.appspot.com",
    messagingSenderId: "418680794308",
    appId: "1:418680794308:web:85a6a82eb895cb6c2b2d91",
    measurementId: "G-THQPZEPBEG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // 코드 추가
