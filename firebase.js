// firebase.js
import firebase from "firebase/app";
import "firebase/auth";

// Firebase 설정 (여기서 본인의 Firebase 프로젝트 설정으로 교체해야 함)
const firebaseConfig = {
  apiKey: "AIzaSyAnivvUggRQD9Lk2EtD1thaGzAaFCT1fY8",
  authDomain: "minsoon-b5f9d.firebaseapp.com",
  projectId: "minsoon-b5f9d",
  storageBucket: "minsoon-b5f9d.appspot.com",
  messagingSenderId: "632186592937",
  appId: "1:632186592937:web:2744d3f1efec02529213b8"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// 이메일 로그인 함수
export function loginEmail(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      console.error("로그인 실패:", error);
      alert("로그인에 실패했습니다.");
    });
}

// 이메일 회원가입 함수
export function signupEmail(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      console.error("회원가입 실패:", error);
      alert("회원가입에 실패했습니다.");
    });
}

// Google 로그인 함수
export function loginGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then((result) => {
      return result.user;
    })
    .catch((error) => {
      console.error("Google 로그인 실패:", error);
      alert("Google 로그인에 실패했습니다.");
    });
}