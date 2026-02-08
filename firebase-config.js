// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAYkfHoEk6lkvphbBQy4HAnEj_bPkCo69Y",
  authDomain: "univsersity-portal.firebaseapp.com",
  projectId: "univsersity-portal",
  storageBucket: "univsersity-portal.firebasestorage.app",
  messagingSenderId: "496336500693",
  appId: "1:496336500693:web:56ad92c33b32ed874c6f5c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);