// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAsTH3h8t5xVrwwuViLjEWpLMHx9RvkozY",
    authDomain: "elenascubancafe.firebaseapp.com",
    projectId: "elenascubancafe",
    storageBucket: "elenascubancafe.appspot.com",
    messagingSenderId: "189664411145",
    appId: "1:189664411145:web:09155dd8e2f0fc0d98c2d8",
    measurementId: "G-8EKDNGQK17"
  };

const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export default database;