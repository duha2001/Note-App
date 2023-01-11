// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpXs2vY3GjxbGzq1BOsG_WmATMBVmIjRw",
  authDomain: "note-app-duha.firebaseapp.com",
  projectId: "note-app-duha",
  storageBucket: "note-app-duha.appspot.com",
  messagingSenderId: "257027411555",
  appId: "1:257027411555:web:ad2b7acff57c8076587256",
  measurementId: "G-5PJ0C2DG9J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
