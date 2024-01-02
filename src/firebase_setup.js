import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBodohYs7CogZK4ePWjUUwNllPjw6-PYPg",
  authDomain: "album-price-checker.firebaseapp.com",
  projectId: "album-price-checker",
  storageBucket: "album-price-checker.appspot.com",
  messagingSenderId: "1017323040700",
  appId: "1:1017323040700:web:631b7187415f4738a885b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);