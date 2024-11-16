import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBF3kVdM88FKxu0-vXUJzFeAxBNavs3MFY",
    authDomain: "gg-resume.firebaseapp.com",
    projectId: "gg-resume",
    storageBucket: "gg-resume.firebasestorage.app",
    messagingSenderId: "488417926823",
    appId: "1:488417926823:web:28269fe9ac2f71be878582",
    measurementId: "G-VWHXQJ9WWX"
};

const app = initializeApp(firebaseConfig);

export default app;
