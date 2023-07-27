import{auth} from "./firebase.mjs"

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";


document.getElementById("Login").addEventListener("click",()=>{
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
   
   signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       alert("you Login")
       setTimeout(() => {
           window.location.href="./home.html"
       }, 3000);
      
       // ...
     })
     .catch((error) => {
   
       const errorCode = error.code;
       const errorMessage = error.message;
       window.location.href="./signup.html"
     });
})
