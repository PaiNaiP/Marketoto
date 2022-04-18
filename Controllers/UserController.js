const {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} = require("firebase/auth");
const { app, db } = require("../db.js");
const { addDoc, collection } = require("firebase/firestore");

const registrationEmail = async (req, res, next) => {
  const { email, password, name, dateOfBirth, sex } = req.body;
  const docRef = await addDoc(
    collection(db, "users", {
      uid: Date.now(),
      email,
      password,
      name,
      dateOfBirth,
      sex,
      cart: [],
    })
  ).catch((err) => {
    console.error(err);
    res.status(400).send(err);
  });
};
const registrationGoogle = async (req, res, next) => {
  const provider = new GoogleAuthProvider(app);
  const auth = await getAuth();
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      console.log("logged in");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(err);
    });
};

module.exports = {
  registrationEmail,
  registrationGoogle,
};
