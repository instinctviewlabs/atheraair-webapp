import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId
// };


const firebaseConfig = {
  apiKey: "AIzaSyCWqTth_6rH6nsy-b6_H5NfMcNk3luxGkU",
  authDomain: "atheraair.firebaseapp.com",
  projectId: "atheraair",
  storageBucket: "atheraair.appspot.com",
  messagingSenderId: "633940330989",
  appId: "1:633940330989:web:7d70b00eb06d6bd2513fe4",
  measurementId: "G-5Z9NKPQR1H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

