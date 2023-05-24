// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAonevt2dlm9PCg_7vRdURrW9Zn61rDi1c",
  authDomain: "linkedin-clone-db777.firebaseapp.com",
  projectId: "linkedin-clone-db777",
  storageBucket: "linkedin-clone-db777.appspot.com",
  messagingSenderId: "391629990290",
  appId: "1:391629990290:web:8cc5bb9589d9ce4091b94b",
  measurementId: "G-MTT6VDFJCK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);