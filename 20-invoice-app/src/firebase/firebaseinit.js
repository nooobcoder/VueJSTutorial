import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4GNDI2Zc-rpBsO7T3MohmAWPfhjnV59Q",
  authDomain: "invoice-vue-app-dcc3d.firebaseapp.com",
  projectId: "invoice-vue-app-dcc3d",
  storageBucket: "invoice-vue-app-dcc3d.appspot.com",
  messagingSenderId: "141905349185",
  appId: "1:141905349185:web:8072493f4c4f0ef6d214c0",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

export default firebaseApp;
export { db };
