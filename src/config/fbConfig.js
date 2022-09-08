import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// config details
var config = {
  apiKey: "AIzaSyCBWhtfkoS6I95OG8h-XoQpJBTuB8mRWtY",
  authDomain: "bsp-project-list.firebaseapp.com",
  projectId: "bsp-project-list",
  storageBucket: "bsp-project-list.appspot.com",
  messagingSenderId: "1004673565991",
  appId: "1:1004673565991:web:fb9bba97b051bf50b65502",
  measurementId: "G-8JZYC6YXD6"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;