import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_apikey}`,
    authDomain: `${process.env.REACT_APP_authDomain}`,
    databaseURL: `${process.env.REACT_APP_databaseURL}`,
    projectId: "blogs-data-d4779",
    storageBucket: `${process.env.REACT_APP_storageBucket}`,
    messagingSenderId: `${process.env.REACT_APP_messagingSenderId}`,
    appId: `${process.env.REACT_APP_appId}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db