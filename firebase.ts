// import firebase from "firebase/compat/app";

// const firebaseConfig = {
//     apiKey: "AIzaSyBnjkLquLzDsRM0N5RXn4oQlxtfhJ9-49Y",
//     authDomain: "chat-app-d7483.firebaseapp.com",
//     projectId: "chat-app-d7483",
//     storageBucket: "chat-app-d7483.appspot.com",
//     messagingSenderId: "946633313482",
//     appId: "1:946633313482:web:704d1bdbded7e4e21e7833",
// };

// const app = !firebase.apps.length
//     ? firebase.initializeApp(firebaseConfig)
//     : firebase.app();

// const db = app.firestore();
// const auth = app.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { db, auth, provider };

import { FirebaseApp } from "@firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBnjkLquLzDsRM0N5RXn4oQlxtfhJ9-49Y",
    authDomain: "chat-app-d7483.firebaseapp.com",
    projectId: "chat-app-d7483",
    storageBucket: "chat-app-d7483.appspot.com",
    messagingSenderId: "946633313482",
    appId: "1:946633313482:web:704d1bdbded7e4e21e7833",
};

// Use this to initialize the firebase App
const app: any = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
