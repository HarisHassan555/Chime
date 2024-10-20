import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBiOPs2qx3dxMpsxYQTWcgRNpR64mDLm0M",
    authDomain: "chime-a1215.firebaseapp.com",
    projectId: "chime-a1215",
    storageBucket: "chime-a1215.appspot.com",
    messagingSenderId: "689229126040",
    appId: "1:689229126040:web:8e1d73b178993a022773ed"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
