import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAur2N4fjWLtkiM1ZFvtV2C94TNYWc-7O0",
  authDomain: "preach-13e29.firebaseapp.com",
  projectId: "preach-13e29",
  storageBucket: "preach-13e29.firebasestorage.app",
  messagingSenderId: "590898725445",
  appId: "1:590898725445:web:eae6434cf133bb043f992c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
