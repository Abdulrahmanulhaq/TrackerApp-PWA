importScripts('https://www.gstatic.com/firebasejs/7.13.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.13.0/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyCPvRWF7a5zwiUsVUTwWDDDbg_wn_DruOE",
    authDomain: "expense-tracker-5cb9b.firebaseapp.com",
    projectId: "expense-tracker-5cb9b",
    messagingSenderId: "842076845859",
    appId: "1:842076845859:web:f1da178edc54c6d3993e96"
})

firebase.messaging();

