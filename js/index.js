const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
var config = {
    apiKey: "AIzaSyD7zLpYOeiCeLIYqoiuAdo8cA9nNHUZizk",
    authDomain: "db-1-12345.firebaseapp.com",
    databaseURL: "https://db-1-12345.firebaseio.com",
    projectId: "db-1-12345",
    storageBucket: "db-1-12345.appspot.com",
    messagingSenderId: "757540290891"
  };
  firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
/*
// Creating Collrctions
db.collection("users").add({
    username: "enigma",
    first: "Shubham",
    last: "Singh",
    email: "shubhamsingh7298@gmail.com" ,
    Nation: "India" ,
    State: "Maharastra" ,
    dob: 07/02/1998,
    gender: 'M',
    profession: "student"
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
*/

const docRef = db.collection("samples").doc("personal");
const Uname = document.querySelector("#UserName");
const name = document.querySelector("#Fanme");
const mail = document.querySelector("#email");

saveButton.addEventListener("click",function() {
    const textToSave = name.value;
    console.log("Data of "+ textToSave + "has been taken");
    docRef.set({
        personalStatus : textToSave
    })
    .then(function() {
        console.log("Satus Saves Successfully");
    }).catch(function(error) {
        console.log("Got an error : ",error);
    });

})