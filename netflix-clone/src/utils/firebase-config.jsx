import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBgUIuErF3258e12dR_6wXJB1TUUavICj8",
  authDomain: "react-netflix-clone-2ae9c.firebaseapp.com",
  projectId: "react-netflix-clone-2ae9c",
  storageBucket: "react-netflix-clone-2ae9c.appspot.com",
  messagingSenderId: "30844980228",
  appId: "1:30844980228:web:4aac231401cfecc7063951",
  measurementId: "G-RSSLGC8L85"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);