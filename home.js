import { auth } from "./firebase.mjs"
import { db , storage } from "./firebase.mjs"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { ref, uploadBytes ,getDownloadURL} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";


let myEmail;
let myId;
let myName;

onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log(user);
        myEmail = user.email;
        console.log(myEmail);
        const uid = user.uid;
        const q = query(collection(db, "users"), where("email", "==", myEmail));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            document.getElementById('myName').innerHTML = doc.data().fname
        });


        getDownloadURL(ref(storage, myEmail))
            .then((url) => {
                console.log(url);
                const img = document.getElementById('myImg');
                img.setAttribute('src', url);
            })
            .catch((error) => {
                console.log(error);
                alert("not")
            });


            const q1 = query(collection(db, "users"), where("email", "!=", myEmail));

            const querySnapshot1 = await getDocs(q1);
            querySnapshot1.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });

        // ...
    } else {
         
    }
});
