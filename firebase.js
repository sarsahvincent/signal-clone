import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZvIWkozWHe5PHPn50G2jGy4V-JxjsNc0",
  authDomain: "singnal-clone-15c30.firebaseapp.com",
  projectId: "singnal-clone-15c30",
  storageBucket: "singnal-clone-15c30.appspot.com",
  messagingSenderId: "464627221092",
  appId: "1:464627221092:web:7207636da3f779d4471571",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
