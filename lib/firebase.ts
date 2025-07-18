// Firebase configuration and initialization
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvhcMJPmXsP2d3OTXw0oKPukHHomVE-xw",
  authDomain: "edutech-academy.firebaseapp.com",
  projectId: "edutech-academy",
  storageBucket: "edutech-academy.firebasestorage.app",
  messagingSenderId: "112097569082",
  appId: "1:112097569082:web:36db4afbe6d26bbb578803"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
