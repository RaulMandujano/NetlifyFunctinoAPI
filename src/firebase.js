// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut} from 'firebase/auth'
import {getFirestore , addDoc , collection } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCssQ4xvLzo7U0IgOvrrnzGGt0Pk_hdBBw",
  authDomain: "heroapi-ea00f.firebaseapp.com",
  projectId: "heroapi-ea00f",
  storageBucket: "heroapi-ea00f.appspot.com",
  messagingSenderId: "33800176302",
  appId: "1:33800176302:web:60697f943b90b4c226633f",
  measurementId: "G-38LR4T4Q79"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

const logInWithEmailAndPassword = async (email , password) => { 
    try  {
        await signInWithEmailAndPassword(auth ,email,password);
    } catch (err) {
        console.error(err);
        alert(err.message)
    }
}

const registerWithEmailAndPassword = async ( firstName , lastName , email , password ) => { 
    try { 
        const result = await createUserWithEmailAndPassword(auth , email,password);
        const user = result.user;

        await addDoc(collection(db , "users") , {
            uid : user.uid,
            firstName,
            lastName,
            authProvider: 'local',
            email
        })
    } catch (err) { 
        console.error(err);
        alert(err.message);
    }
}

const logout = () => { 
    signOut(auth);
}

export { 
    auth,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
}