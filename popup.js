var config = {
  apiKey: "AIzaSyBe6nG3DFN4u7UnWbDpGJqRI3R_yvwbcT0",
  authDomain: "hate-speech-monitoring.firebaseapp.com",
  databaseURL: "https://hate-speech-monitoring.firebaseio.com",
  projectId: "hate-speech-monitoring",
  storageBucket: "hate-speech-monitoring.appspot.com",
  messagingSenderId: "391836703185"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
      document.getElementById("welcome_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      document.getElementById("signup_div").style.display ="none";



    if(user!=null) {

      var email_id = user.email;

      document.getElementById("user_para").innerHTML = "Welcome User :" + email_id;
    }
  } else {
    // No user is signed in.
    document.getElementById("welcome_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function displaysignup() {
  document.getElementById("login_div").style.display = "none";
  document.getElementById("signup_div").style.display ="block";
}

function displaylogin() {
  document.getElementById("login_div").style.display = "block";
  document.getElementById("signup_div").style.display ="none";
}

document.getElementById("dispsign").onclick = function(){displaysignup()};

document.getElementById("displog").onclick = function(){displaylogin()};


function login() {
  var userEmail = document.getElementById("email_field").value;
  var userPassword = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.alert("Error : "+ errorMessage);
});
}


function signup() {
  var userEmail = document.getElementById("email_field_signup").value;
  var userPassword = document.getElementById("password_field_signup").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.alert("Error : "+ errorMessage);
});

}
function sendVerification() {
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    // Email sent.
    window.alert("Email Verification Sent");
  }).catch(function(error) {
    // An error happened.
  });
}
document.getElementById("verify_btn").onclick=function(){sendVerification()};

document.getElementById("login_btn").onclick = function(){login()};
document.getElementById("signup_btn").onclick = function(){signup()};

function logout() {
  firebase.auth().signOut();
}

document.getElementById("logout_btn").onclick=function(){logout()};
