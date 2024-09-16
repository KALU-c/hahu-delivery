import { initializeApp } from "firebase/app"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getReactNativePersistence, initializeAuth, updateProfile } from "firebase/auth";
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

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, { persistence: getReactNativePersistence(ReactNativeAsyncStorage) });


export const createUser = async (email: string, password: string, name: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
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
    const userCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
    const user = userCredential.user;
    console.log("Sign In: ", user);

    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};