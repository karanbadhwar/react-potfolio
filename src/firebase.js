import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAQRz1kN0pojhmXLo5FXsgZfvoyqsywBZo',
  authDomain: 'portfolio-6ddd7.firebaseapp.com',
  projectId: 'portfolio-6ddd7',
  storageBucket: 'portfolio-6ddd7.appspot.com',
  messagingSenderId: '121549324334',
  appId: '1:121549324334:web:e3716a5963300900b3dfbf',
  measurementId: 'G-C6F7W2MFYF',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

// To avoid Account getting sleected automatically

provider.setCustomParameters({
  prompt: 'select_account',
})

export const signInWithGoogle = () => signInWithPopup(auth, provider)

// Storage for Images
export const storage = getStorage(app)

// Firestore Database

export const db = getFirestore(app)
