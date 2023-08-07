// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOBnwIZ9fNtJL68NudIpf4n4HVXO9bqPc",
  authDomain: "linkedinclone-a9543.firebaseapp.com",
  projectId: "linkedinclone-a9543",
  storageBucket: "linkedinclone-a9543.appspot.com",
  messagingSenderId: "100773844141",
  appId: "1:100773844141:web:e3b3a09a23c1347af4a224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


export { app, auth,firestore, storage };
