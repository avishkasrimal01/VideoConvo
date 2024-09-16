import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC440XzQALFkImF2ylqRh7oye3mrtkBPQ4",
  authDomain: "video-conference-aac05.firebaseapp.com",
  projectId: "video-conference-aac05",
  storageBucket: "video-conference-aac05.appspot.com",
  messagingSenderId: "344791455236",
  appId: "1:344791455236:web:c1126b66bebb9c9c164751",
  measurementId: "G-BZ9F7NHMV5"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
