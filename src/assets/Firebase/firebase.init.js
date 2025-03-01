// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_3jGTVOyKuKJNcqStpNReuNzA4vAv7oY",
  authDomain: "authprovider-context-api-pp25.firebaseapp.com",
  projectId: "authprovider-context-api-pp25",
  storageBucket: "authprovider-context-api-pp25.firebasestorage.app",
  messagingSenderId: "397077374714",
  appId: "1:397077374714:web:2e2a2936c9b228b05dcb43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);