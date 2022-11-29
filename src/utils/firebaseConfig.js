import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHO4zy84kWJpD4aQhSwLm5TiMIaXNh_IM",
  authDomain: "react-coder2.firebaseapp.com",
  projectId: "react-coder2",
  storageBucket: "react-coder2.appspot.com",
  messagingSenderId: "1072814674033",
  appId: "1:1072814674033:web:ff084ad470e4edfca30bd0"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

