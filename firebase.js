// Firebase SDK Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDDiHx8VG0huCZ-emNg_54Wa8ebMFtdl7Y",
  authDomain: "zm-project-a12f5.firebaseapp.com",
  projectId: "zm-project-a12f5",
  storageBucket: "zm-project-a12f5.firebasestorage.app",
  messagingSenderId: "349206012415",
  appId: "1:349206012415:web:319b04b844dfc9ced087ca",
  measurementId: "G-L23NC0GQEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);

// Export Database
export { db };
