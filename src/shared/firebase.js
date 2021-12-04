import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDI7rm0_9mJemM3SA93VYGWheTsJrsagQM",
  authDomain: "image-community-2d9ed.firebaseapp.com",
  projectId: "image-community-2d9ed",
  storageBucket: "image-community-2d9ed.appspot.com",
  messagingSenderId: "85493758539",
  appId: "1:85493758539:web:194b738b6d3e57a4656bce",
  measurementId: "G-8Z8SSC0YTL",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, apiKey, firestore, storage };
