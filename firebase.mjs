  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyByE2tN_PsLz9wl8JS1wPUp9HRcwMw-0qI",
    authDomain: "first-352b3.firebaseapp.com",
    projectId: "first-352b3",
    storageBucket: "first-352b3.appspot.com",
    messagingSenderId: "627727661584",
    appId: "1:627727661584:web:3e87800afbdcf0fc972895",
    measurementId: "G-99CRDS20VC"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db =  getFirestore(app);
 export const storage= getStorage(app);