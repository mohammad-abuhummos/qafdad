import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDn6QGA7F2gNS8EEKv1xRHn9zP406C9q6I",
    authDomain: "qafdaad.firebaseapp.com",
    projectId: "qafdaad",
    storageBucket: "qafdaad.appspot.com",
    messagingSenderId: "907836133404",
    appId: "1:907836133404:web:d76ca01757c734c4f74fd9",
    measurementId: "G-TC5BT6JVR4"
};
  


// export default function initFirebase() {
//     if (!!firebase) {
//     }
//     console.log("firebase")
// }
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
