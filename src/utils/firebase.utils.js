// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged

} from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCgu3SPoMo01gSZrll8fY0X2H49i5bbtyA',
  authDomain: 'nike-pg-db.firebaseapp.com',
  projectId: 'nike-pg-db',
  storageBucket: 'nike-pg-db.appspot.com',
  messagingSenderId: '589134934169',
  appId: '1:589134934169:web:959470593266078ba4c808',
}

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = new getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const db = getFirestore()

export const createUserDocFromAuth = async (userAuth, additionalInformation) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation})
    } catch (err) {
      console.log(err.message)
    }
  }
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password)=>{
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)  
}
export const signInAuthUserWithEmailAndPassword = async (email, password)=>{
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)  
}

export const signOutUser =async ()=> await signOut(auth);

export const onAuthStateChangedListener = (callback)=> onAuthStateChanged(auth, callback);