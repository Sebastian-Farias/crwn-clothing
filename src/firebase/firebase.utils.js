import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';  
import 'firebase/compat/auth';

// "/compat/" va con todo lo que sea relacionado con imports de Firebase

const config = {
    apiKey: "AIzaSyDBk0u9rx2Ss8u8jzrlM06cYGJev41ex_k",
    authDomain: "crwn-db-538ca.firebaseapp.com",
    projectId: "crwn-db-538ca",
    storageBucket: "crwn-db-538ca.appspot.com",
    messagingSenderId: "959469824214",
    appId: "1:959469824214:web:7844f37fbee3f71959c177",
    measurementId: "G-C5M6M03ZE6"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () =>  auth.signInWithPopup(provider);

export default firebase;