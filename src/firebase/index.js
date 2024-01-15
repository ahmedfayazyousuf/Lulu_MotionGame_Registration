// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import {getStorage} from "firebase/storage"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvkhqUpciGxba_O7z4BTsQxnU4sI2nMuw",
  authDomain: "lulumotiongamedatabase.firebaseapp.com",
  projectId: "lulumotiongamedatabase",
  storageBucket: "lulumotiongamedatabase.appspot.com",
  messagingSenderId: "563150235654",
  appId: "1:563150235654:web:6b9674ca0a70e63f62fb87",
  measurementId: "G-7NYPF6LZX9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase; 
export const storage = getStorage(app);




