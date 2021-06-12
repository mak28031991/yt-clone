import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXwiqPJhJCwzpIw_02YlXWysUMb0i6A7I",
  authDomain: "yt-clone-avinash-a37c6.firebaseapp.com",
  projectId: "yt-clone-avinash-a37c6",
  storageBucket: "yt-clone-avinash-a37c6.appspot.com",
  messagingSenderId: "1018971132223",
  appId: "1:1018971132223:web:4074a9c766f087ab29c38a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
