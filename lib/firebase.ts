import { initializeApp, getApps } from "firebase/app"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getReactNativePersistence, initializeAuth, updateProfile, getAuth } from "firebase/auth";
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

// Only initialize Firebase if no apps are initialized
export const FIREBASE_APP = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps()[0];

// Initialize Firebase Authentication
export const FIREBASE_AUTH = !getAuth(FIREBASE_APP).app
  ? initializeAuth(FIREBASE_APP, { persistence: getReactNativePersistence(ReactNativeAsyncStorage) })
  : getAuth(FIREBASE_APP);


export const createUser = async (email: string, password: string, name: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
    const user = userCredential.user;
    // console.log(user);

    await updateProfile(user, {
      displayName: name
    });
    // console.log(user);

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
    const userCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
    const user = userCredential.user;
    // console.log("Sign In: ", user);

    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};