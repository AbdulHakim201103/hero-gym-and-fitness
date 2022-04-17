
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYPGoDDniT9TKHg3lsZ0GiQVNyzSutFEU",
  authDomain: "hero-gym-and-fitness.firebaseapp.com",
  projectId: "hero-gym-and-fitness",
  storageBucket: "hero-gym-and-fitness.appspot.com",
  messagingSenderId: "8111289041",
  appId: "1:8111289041:web:3b9867c76c812e9e59cbf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;