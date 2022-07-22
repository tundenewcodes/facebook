// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import {
    getFirestore,
    collection,
    getDocs,

} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBlG4UPxoeU3CxVZsHfwSK_vIqyS4usBqM',
    authDomain: 'facebook-clone-5f141.firebaseapp.com',
    projectId: 'facebook-clone-5f141',
    storageBucket: 'facebook-clone-5f141.appspot.com',
    messagingSenderId: '925005622308',
    appId: '1:925005622308:web:ecbdb4371287b94c6bfcb1',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)


export { db, storage }