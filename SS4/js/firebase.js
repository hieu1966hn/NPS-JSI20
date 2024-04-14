// Import the functions you need from the SDKs you need

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0idO27D7iflot3DciKOjO6gf9v-KjEqA",
  authDomain: "nps-jsi20.firebaseapp.com",
  projectId: "nps-jsi20",
  storageBucket: "nps-jsi20.appspot.com",
  messagingSenderId: "1043542820951",
  appId: "1:1043542820951:web:136df6d3e64f79e1123b12",
  measurementId: "G-WWKE11W95Y",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); // khởi tạo firebase
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
