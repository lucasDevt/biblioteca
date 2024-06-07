import firebase from "firebase"
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyCvZMJo_QCn7mLIryP9QLchXSGlTOZUX6g",
    authDomain: "askabam-853e3.firebaseapp.com",
    projectId: "askabam-853e3",
    storageBucket: "askabam-853e3.appspot.com",
    messagingSenderId: "1066710476767",
    appId: "1:1066710476767:web:84ee5b1845eb66fa90066a"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()