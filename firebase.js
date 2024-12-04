// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,// authentication 설정
    signInWithPopup, //google 로그인을 팝업창에 띄우기 위해
    GoogleAuthProvider, //google login 기능
    signInWithEmailAndPassword,// email 로그인
    createUserWithEmailAndPassword, //email 회원가입
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbbbNQtr9rOotl4SRoc3YYNL4nGcYOcpo",
    authDomain: "javascript-login-test-29ffa.firebaseapp.com",
    databaseURL: "https://javascript-login-test-29ffa-default-rtdb.firebaseio.com",
    projectId: "javascript-login-test-29ffa",
    storageBucket: "javascript-login-test-29ffa.firebasestorage.app",
    messagingSenderId: "681750583935",
    appId: "1:681750583935:web:ee5c677e19a8f0a359bd4a",
    measurementId: "G-TCB1155QYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// auth 설정 필수!!
const auth = getAuth();

//Email 로그인
export const signupEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

//Email 회원가입
export const loginEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};