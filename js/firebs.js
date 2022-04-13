       // Import the functions you need from the SDKs you need
       import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
       import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
       import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
       // TODO: Add SDKs for Firebase products that you want to use
       // https://firebase.google.com/docs/web/setup#available-libraries
     
       // Your web app's Firebase configuration
       // For Firebase JS SDK v7.20.0 and later, measurementId is optional
       const firebaseConfig = {
         apiKey: "AIzaSyDRlNhNaO0o1xKYhPIjAKO2Ko5Drz7vxLM",
         authDomain: "marketoto-d7c0e.firebaseapp.com",
         projectId: "marketoto-d7c0e",
         storageBucket: "marketoto-d7c0e.appspot.com",
         messagingSenderId: "674088598405",
         appId: "1:674088598405:web:7a02f66abeffb8512be2ec",
         measurementId: "G-5WJYPXVF1Z"
       };
     
       // Initialize Firebase
       const app = initializeApp(firebaseConfig);
       const analytics = getAnalytics(app);

       const provider = new GoogleAuthProvider(app);
       const auth = getAuth(app);
      

       document.getElementById('google').addEventListener('click', function(){
           signInWithRedirect(auth, provider);
           getRedirectResult(auth)
 .then((result) => {
   // This gives you a Google Access Token. You can use it to access Google APIs.
   const credential = GoogleAuthProvider.credentialFromResult(result);
   const token = credential.accessToken;

   // The signed-in user info.
   const user = result.user;
   console.log('logged in')
 }).catch((error) => {
   // Handle Errors here.
   const errorCode = error.code;
   const errorMessage = error.message;
   // The email of the user's account used.
   const email = error.email;
   // The AuthCredential type that was used.
   const credential = GoogleAuthProvider.credentialFromError(error);
   // ...
   console.log(err)
 });


       })