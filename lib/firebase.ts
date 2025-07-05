import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { projectHmrIdentifiersSubscribe } from "next/dist/build/swc/generated-native";


const googleProvider = new GoogleAuthProvider();

export { googleProvider }
const firebaseConfig = {
  apiKey: "AIzaSyDOk8dYHQjap02V3WMkdx0Fq1iSQwukOXg",
  authDomain: "on-time-f0c31.firebaseapp.com",
  projectId: "on-time-f0c31",
  storageBucket: "on-time-f0c31.firebasestorage.app",
  messagingSenderId: "287950873372",
  appId: "1:287950873372:web:94e06b62f36028b4c2d0d9",
  measurementId: "G-E6019W85SQ"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
