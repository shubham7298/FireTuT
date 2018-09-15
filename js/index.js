
var LOGIN_USER = null;
/*
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      console.log(user);
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
        console.log( "welcome " + email_id);
        //document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
  
        //var alovelaceDocumentRef = db.doc('users/DCG4BVA6aETGqqOd25Jkb9Ba0Es2');
        const docres=db.doc("users/"+email_id)
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
       
  
  
  
  
      }
  
    } else {
      // No user is signed in.
  
      //document.getElementById("user_div").style.display = "none";
      //document.getElementById("login_div").style.display = "block";
  
    }
  });
  */

function signup()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("passW").value;
    console.log('find_me2');
    var f_call = firebase.functions().httpsCallable('funk1');      
    f_call({email,password}).then(function(result){
        console.log(result+'here5')
    });

    /* save to user
    user = {
        dob: val.dob
    }       */
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    
        window.alert("Error : " + errorMessage);
    
        // ...
      });
    }

    // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function login(){
  

    var userEmail = document.getElementById("e-mail").value;
    var userPass = document.getElementById("psw").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });


} 