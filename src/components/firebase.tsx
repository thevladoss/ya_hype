import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";

 const firebaseConfig = {
    apiKey: "AIzaSyDUL7XWll7udm3HDHhnwhUJ2mJqUFSpFoI",
    authDomain: "ya-hype.firebaseapp.com",
    projectId: "ya-hype",
    storageBucket: "ya-hype.appspot.com",
    messagingSenderId: "443359109534",
    appId: "1:443359109534:web:51104040c7d94ef16df68f"
};
 
 const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);
 