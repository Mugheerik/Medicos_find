// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgfE7GGgMnSunIw6gj5Rmkr2ESIIHt8I8",
  authDomain: "medicos-ab1b2.firebaseapp.com",
  projectId: "medicos-ab1b2",
  storageBucket: "medicos-ab1b2.appspot.com",
  messagingSenderId: "283453629085",
  appId: "1:283453629085:web:025a232131cf03fcc46a74",
  measurementId: "G-G9HTCPJQX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db =getFirestore(app);
export {db};