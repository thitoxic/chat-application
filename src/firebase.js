// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkcYtDhkkJ152LYq72_ffKoPnVBuCRM7Y",
  authDomain: "chat-app-80c5e.firebaseapp.com",
  projectId: "chat-app-80c5e",
  storageBucket: "chat-app-80c5e.appspot.com",
  messagingSenderId: "156677644472",
  appId: "1:156677644472:web:98bfaca80f578409ebd44d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);