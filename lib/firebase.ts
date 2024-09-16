import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, getReactNativePersistence, initializeAuth, updateProfile } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDcWH_ex4yqwSvcK12fiY44FgH0VIS_6Kc",
  authDomain: "hahu-delivery.firebaseapp.com",
  projectId: "hahu-delivery",
  storageBucket: "hahu-delivery.appspot.com",
  messagingSenderId: "397805497196",
  appId: "1:397805497196:web:4290b43b1b939b72456149",
  measurementId: "G-J6ZHJ73MCB"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {persistence: getReactNativePersistence(ReactNativeAsyncStorage)});


export const createUser = async (email: string, password: string, name: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);

    await updateProfile(user, {
      displayName: name
    });
    console.log(user);

    await signIn(email, password);

    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Sign In: ", user);

    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};


// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });


// const authStateObserver = async () => {
  
// }

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });