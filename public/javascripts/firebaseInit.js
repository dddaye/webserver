// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNEFlQzIKuW5FkjRwLBAt0aMb89baHGDs",
  authDomain: "fir-61976.firebaseapp.com",
  projectId: "fir-61976",
  databaseURL: "https://fir-61976-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "fir-61976.appspot.com",
  messagingSenderId: "859193647783",
  appId: "1:859193647783:web:38cfdc880fb41d226d7182",
  measurementId: "G-QGFTWSY337"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
