import { initializeApp } from "@firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDWoUeRmnYO6K43UHoGS7N4hwosPbR-WCA",
  authDomain: "crwn-clothing-f84f0.firebaseapp.com",
  projectId: "crwn-clothing-f84f0",
  storageBucket: "crwn-clothing-f84f0.appspot.com",
  messagingSenderId: "186497948072",
  appId: "1:186497948072:web:8d662b59dee5d6b4e2e59d",
  measurementId: "G-XZMM9CQBY2"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {

  if(!userAuth) return

  const userRef = doc(db, 'users', `${userAuth.uid}`);
  const docSnap = await getDoc(userRef)

  //Check if the document exists in this collection
  if(!docSnap.exists()){
    const {displayName, email} = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userRef,{
        displayName,
        email,
        createdAt,
        ...additionalData
      })
      
    } catch (error) {
      console.log("error creating user", error)
    }
  } 
  return userRef
} 

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app);


const provider = new GoogleAuthProvider()

   //Handle signin with google
   export const signinWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

//Sign out
export const signOutGoogle = () => {
    signOut(auth).then(() => {
        alert("Sign-out successful.")
      }).catch((error) => {
        console.log(error)
      });
}


