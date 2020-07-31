import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB6MtlbYlUKaYjT9S0VWNkdjX_O-WLEX1I",
  authDomain: "jugal-chotagram.firebaseapp.com",
  databaseURL: "https://jugal-chotagram.firebaseio.com",
  projectId: "jugal-chotagram",
  storageBucket: "jugal-chotagram.appspot.com",
  messagingSenderId: "54641376272",
  appId: "1:54641376272:web:da9fc89d8a58c39ad31e95",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timeStamp};
