import * as firebase from "firebase/app";
import "firebase/auth";

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

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
