import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "snapchat-4d010.firebaseapp.com",
  projectId: "snapchat-4d010",
  storageBucket: "snapchat-4d010.appspot.com",
  messagingSenderId: "397770685356",
  appId: "1:397770685356:web:813219f6a437df6f991809",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db, storage };
