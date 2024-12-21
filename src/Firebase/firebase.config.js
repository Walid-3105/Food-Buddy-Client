// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiSvK3n1B2gHuUnU1f9yejVSqEnUUSBXs",
  authDomain: "assignment-11-a70b0.firebaseapp.com",
  projectId: "assignment-11-a70b0",
  storageBucket: "assignment-11-a70b0.firebasestorage.app",
  messagingSenderId: "300846389984",
  appId: "1:300846389984:web:49894aa0a2eb2b9068ce85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
