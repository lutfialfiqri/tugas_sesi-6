
import firebase from 'firebase';

const firebaseConfig = {
 apiKey: "AIzaSyB3plMoYzEPVWtavK7dmTrr2vEpypSsgNs",
  authDomain: "todoapp-nazib.firebaseapp.com",
  projectId: "todoapp-nazib",
  storageBucket: "todoapp-nazib.firebasestorage.app",
  messagingSenderId: "716312588875",
  appId: "1:716312588875:web:9d16de140a74f60d7313ce",
  measurementId: "G-YGR37EZCB2"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
