import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDloSPpn-sb6lkS-EsEqZk9MsMEfzP_3Ao",
    authDomain: "chatapp-de57e.firebaseapp.com",
    databaseURL: "https://chatapp-de57e.firebaseio.com",
    projectId: "chatapp-de57e",
    storageBucket: "chatapp-de57e.appspot.com",
    messagingSenderId: "278245426306"
};
firebase.initializeApp(config); 

export default firebase;