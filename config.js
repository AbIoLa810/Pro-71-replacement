import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCdnzmYlU2WRgatbznVU0gzDVsTtGRrOfc",
    authDomain: "pro-71-abeb5.firebaseapp.com",
    projectId: "pro-71-abeb5",
    storageBucket: "pro-71-abeb5.appspot.com",
    messagingSenderId: "306250622366",
    appId: "1:306250622366:web:cd3381bad3c6ad8adde28f"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
