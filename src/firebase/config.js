import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCf2drse8S05qrl5dqDMjJJ4MmquljKi7U",
    authDomain: "vue-net-ninja-31eac.firebaseapp.com",
    projectId: "vue-net-ninja-31eac",
    storageBucket: "vue-net-ninja-31eac.appspot.com",
    messagingSenderId: "666671513530",
    appId: "1:666671513530:web:b51491623e2a676535a783"
  };


  //init firebase 
  firebase.initializeApp(firebaseConfig)

  const projectFiresore = firebase.firestore()
  const timestamps = firebase.firestore.FieldValue.serverTimestamp
  const projectAuth = firebase.auth()

  export {projectFiresore, timestamps , projectAuth}