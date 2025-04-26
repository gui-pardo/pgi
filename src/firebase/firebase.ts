
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA7Pj3jGlTN5cIasotZzxZ3Fbtfe1dBjak",
  authDomain: "gym-help-4e82d.firebaseapp.com",
  projectId: "gym-help-4e82d",
  storageBucket: "gym-help-4e82d.firebasestorage.app",
  messagingSenderId: "805513876969",
  appId: "1:805513876969:web:9c59d7ecb7f24dec5d6778",
  measurementId: "G-Z1FCL1MMEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };