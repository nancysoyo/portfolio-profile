// Initialize Firebase
var config = {
    apiKey: "AIzaSyAEOcpsxGKsWPx_EHxI7RnPPpMqf1vywyQ",
    authDomain: "contactportofilo.firebaseapp.com",
    databaseURL: "https://contactportofilo.firebaseio.com",
    projectId: "contactportofilo",
    storageBucket: "contactportofilo.appspot.com",
    messagingSenderId: "26031664000"
  };
  firebase.initializeApp(config);

  // reference messages

  var messagesref = firebase.database().ref("messages");


//listen for form submit
document.getElementById("contact").addEventListener("submit",submitForm);
function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var website = getInputVal('website');
    var message = getInputVal('message');

  //  save Message


  saveMessage(name,email,phone,website,message);

//alert message
  document.querySelector(".alert").style.display ="block";

  //hide alert after 4 second

  setTimeout(function(){
      document.querySelector(".alert").style.display = "none";
  },3000);

  document.getElementById("contact").reset();
  }

// the function to get the form value

function getInputVal(id){
    return document.getElementById(id).value;
}

//function to save messages to firebase

function saveMessage(name,email,phone,website,message){
    var newMessageRef = messagesref.push();
    newMessageRef.set({
        name:name,
        email:email,
        phone:phone,
        website:website,
        message:message

    });
}