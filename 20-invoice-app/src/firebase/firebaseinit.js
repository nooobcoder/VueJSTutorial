import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4GNDI2Zc-rpBsO7T3MohmAWPfhjnV59Q",
  authDomain: "invoice-vue-app-dcc3d.firebaseapp.com",
  projectId: "invoice-vue-app-dcc3d",
  storageBucket: "invoice-vue-app-dcc3d.appspot.com",
  messagingSenderId: "141905349185",
  appId: "1:141905349185:web:8072493f4c4f0ef6d214c0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
