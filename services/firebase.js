
import { initializeApp } from "firebase/app";
// @ts-ignore
import { initializeAuth, getReactNativePersistence} from "firebase/auth";

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyB7_wMrAOKXl534l-XyLdE1R7HB2pbJxlA",
  authDomain: "hopi-firebase.firebaseapp.com",
  projectId: "hopi-firebase",
  storageBucket: "hopi-firebase.appspot.com",
  messagingSenderId: "701236208654",
  appId: "1:701236208654:web:e241a6668a8a639fb0085f"

};
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence (ReactNativeAsyncStorage),
});

