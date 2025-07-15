// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdIHFOSiUwDYBhYgXdL8tI_QbuIEDD7AY",
  authDomain: "studyshare-ac69b.firebaseapp.com",
  projectId: "studyshare-ac69b",
  storageBucket: "studyshare-ac69b.firebasestorage.app",
  messagingSenderId: "287290826448",
  appId: "1:287290826448:web:c235c33fa8c4ffd06a48d5",
  measurementId: "G-5E9FMZKJ0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);