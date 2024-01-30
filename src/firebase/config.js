import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyB8RU1Fs3HfVI0P_3Kt1rz9wowxsPE7U2o',
    authDomain: 'learning-vue-60a9e.firebaseapp.com',
    projectId: 'learning-vue-60a9e',
    storageBucket: 'learning-vue-60a9e.appspot.com',
    messagingSenderId: '218142734759',
    appId: '1:218142734759:web:63289f820c9fcd4b289e82',
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
