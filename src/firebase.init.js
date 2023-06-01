// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDry7OCgJBsNl8lLLwOw-Y9dJf_Gmff8Mo",
  authDomain: "alex-motors.firebaseapp.com",
  projectId: "alex-motors",
  storageBucket: "alex-motors.appspot.com",
  messagingSenderId: "60030112714",
  appId: "1:60030112714:web:0632c9daa610d79f607533",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
