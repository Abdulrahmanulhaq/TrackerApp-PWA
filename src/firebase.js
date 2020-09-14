import firebase from 'firebase'

const config ={
    apiKey: "AIzaSyCPvRWF7a5zwiUsVUTwWDDDbg_wn_DruOE",
    authDomain: "expense-tracker-5cb9b.firebaseapp.com",
    databaseURL: "https://expense-tracker-5cb9b.firebaseio.com",
    projectId: "expense-tracker-5cb9b",
    storageBucket: "expense-tracker-5cb9b.appspot.com",
    messagingSenderId: "842076845859",
    appId: "1:842076845859:web:f1da178edc54c6d3993e96"
}

firebase.initializeApp(config)

export default firebase