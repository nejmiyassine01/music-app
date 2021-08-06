import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBQbfb4VZIyLT5cO8fQRst2qXPu3836MYo',
  authDomain: 'music-app-4444c.firebaseapp.com',
  projectId: 'music-app-4444c',
  storageBucket: 'music-app-4444c.appspot.com',
  appId: '1:516311210244:web:9d17bca15f0448c7e4d851',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export { auth, db, usersCollection };
