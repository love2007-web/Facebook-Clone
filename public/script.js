let email = document.getElementById('email');
let password = document.getElementById('password');
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
// let username = document.getElementById('username');

function signup() {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
      var user = userCredential.user;
      user.updateProfile({
        displayName: firstName.value + " " + lastName.value,
    }).then(() => {
        alert("Signup Successful");
        window.location.href = "./index.html"
    }).catch((error) => {
        console.log(error);
    });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}

function login() {
  let email2 = document.getElementById("email2")
  let password2 = document.getElementById("password2")
  firebase.auth().signInWithEmailAndPassword(email2.value, password2.value)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log(user);
    window.location.href = 'feed.html'
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}