// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_iTx2aGUhAqGmHcQlhIsIvZFHB7a4aHI",
    authDomain: "blogs-data-d4779.firebaseapp.com",
    databaseURL: "https://blogs-data-d4779-default-rtdb.firebaseio.com",
    projectId: "blogs-data-d4779",
    storageBucket: "blogs-data-d4779.appspot.com",
    messagingSenderId: "784720537156",
    appId: "1:784720537156:web:6f48dbab9c7dbc9c3cbe11"

    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_ID

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db