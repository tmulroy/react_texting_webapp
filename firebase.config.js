const firebase = require('firebase');
const config = {
   apiKey: "AIzaSyC4kKX-QRELGyrt1WA1CUCyl0uXPltRvw4",
   authDomain: "react-sms-webapp.firebaseapp.com",
   databaseURL: "https://react-sms-webapp.firebaseio.com",
   storageBucket: "",
   messagingSenderId: "109821345161"
 };
firebase.initializeApp(config);
module.exports = firebase;
