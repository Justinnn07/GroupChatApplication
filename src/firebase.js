import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBx87tPLOaRMLTnc7C4-YeYOuTi3OfZ2MQ",
  authDomain: "chat-application-7702c.firebaseapp.com",
  projectId: "chat-application-7702c",
  storageBucket: "chat-application-7702c.appspot.com",
  messagingSenderId: "379982857249",
  appId: "1:379982857249:web:be96781fee5fa8ac820f60",
  measurementId: "G-QVC747HZ3Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
