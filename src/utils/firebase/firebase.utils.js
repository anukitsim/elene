import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
 
const firebaseConfig = {
    apiKey: "AIzaSyCGzVkTnaYXrmo5E-OgyhD11Tqnj1W8yEs",
    authDomain: "elene-db.firebaseapp.com",
    projectId: "elene-db",
    storageBucket: "elene-db.appspot.com",
    messagingSenderId: "294391132852",
    appId: "1:294391132852:web:1cfe7fddfcfb1041881de1"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:'select_account'
  })

  export const auth = getAuth();

  export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
  
  
  