import firebase from 'firebase'
import 'firebase/auth'

const config = {
    apiKey : "AIzaSyD6JC6tanCwUnld79w8mdR9WUNzEGJ_NOc",
    authDomain : "fundoo-android-app.firebaseapp.com",
    databaseURL : "https://fundoo-android-app.firebaseio.com",
    projectId : "fundoo-android-app",
    storageBucket : "fundoo-android-app.appspot.com",
    messagingSenderId : "429943827117",
    appId : "1:429943827117:web:a7e2262db936e508acb424",
    measurementId : "G-TYQLXSBSE4"
}

firebase.initializeApp(config)

const firebaseAuth = firebase.auth()
var firebaseDatabaseRef = firebase.database();

export { firebaseAuth, firebaseDatabaseRef }

