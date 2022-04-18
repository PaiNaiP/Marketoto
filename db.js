const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const config = require("./config.js");
const {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} = require("firebase/auth");

const { firebaseConfig } = config;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = {
  app,
  db,
};
