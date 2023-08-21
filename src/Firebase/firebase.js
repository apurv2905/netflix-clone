import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4ph6LTLEoU6IZEuefK7Y1azwX4aY-XKM",
    authDomain: "netflix-clone-bdc0c.firebaseapp.com",
    projectId: "netflix-clone-bdc0c",
    storageBucket: "netflix-clone-bdc0c.appspot.com",
    messagingSenderId: "670703171911",
    appId: "1:670703171911:web:7dd1445d49e61fd62cb462"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
