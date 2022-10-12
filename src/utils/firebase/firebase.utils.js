import {  initializeApp } from 'firebase/app'; // Creates and initializes a Firebase app instance

import { 
getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider,
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from 'firebase/auth';

import {
  getFirestore,
  doc, // Get a doc instanse
  getDoc, // Access data in docs
  setDoc, // set data
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2KWCy36evnUYR-RJ8YOZ_jX32qlGN55g",
    authDomain: "react-course-db-13fea.firebaseapp.com",
    projectId: "react-course-db-13fea",
    storageBucket: "react-course-db-13fea.appspot.com",
    messagingSenderId: "383929082032",
    appId: "1:383929082032:web:7555ee989c8a8a6ec9db75"
  };

  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//  Give provider instance
const googleProvider = new GoogleAuthProvider();

// Custom params - tell google auth provider how to behave
googleProvider.setCustomParameters( {
    prompt: "select_account" // force user to select account when interacting
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Tell firebase if we want to get, set a document (points to DB)
export const db = getFirestore();

// Take data and store in firebase DB
export const createUserDocumentFromAuth = async (userAuth,
  additionalInformation = {}) => {

  if(!userAuth) return;

  // is there an existing dco reference (object)
  const userDocRef = doc(db, 'users', userAuth.uid); // userAuth.uid = unique ID 

  // console.log(userDocRef);

// Get data 
  const userSnapshot = await getDoc(userDocRef); 

// if snapshot doesnt exist
  if(!userSnapshot.exists()) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();
// if snapshot doesnt exist set in DB with setDoc object
  try {
    await setDoc(userDocRef, { 
      displayName,
      email,
      createdAt,
      ...additionalInformation
    });
  } catch(error) {
    console.log('error creting the user', error.message);
  }

}

return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
