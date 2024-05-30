// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbKLFO_BywV8OlvjiMEaCTYVMPIPy_oFk",
  authDomain: "blacksheepdeco-store.firebaseapp.com",
  projectId: "blacksheepdeco-store",
  storageBucket: "blacksheepdeco-store.appspot.com",
  messagingSenderId: "22103189418",
  appId: "1:22103189418:web:01ec7b25792cbcbd14add3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)