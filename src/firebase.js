import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAhdNQCVMitmpcxmrnaQxQG_QHGfBpzEok",
  authDomain: "chrome-ranger-419514.firebaseapp.com",
  projectId: "chrome-ranger-419514",
  storageBucket: "chrome-ranger-419514.appspot.com",
  messagingSenderId: "714082250632",
  appId: "1:714082250632:web:41075fea83f87e9f7ad43d",
  measurementId: "G-H5D4K1ZFRQ"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
