const firebaseConfig = {
  apiKey: "AIzaSyAkYS22tHZaeaSm5bjU8y4JXkV8DsDF0yw",
  authDomain: "details-46d63.firebaseapp.com",
  databaseURL: "https://details-46d63-default-rtdb.firebaseio.com",
  projectId: "details-46d63",
  storageBucket: "details-46d63.appspot.com",
  messagingSenderId: "871577225225",
  appId: "1:871577225225:web:67a8310232839a897d10d8"
};








firebase.initializeApp(firebaseConfig);

//reference for databse
var detailsDB = firebase.database().ref('details')

document.getElementById('login').addEventListener("submit" , submitForm);


// function submitForm(e){

//   e.preventDefault(); 
//   var email = getElementVal('email');
//   var password = getElementVal('password');

//   saveMessages(email,password);
//   console.log(email, password);
  

  
// }

// function redirectToHome() {
//   var response = confirm("Are you sure you want to proceed to the home page?");
//   if (response == true) {
//     window.location.href = "../index.html";
//   }
// }

// const saveMessages = (email,password) => {
//    var newForm = detailsDB.push();

//    newForm.set({
//     email : email,
//     password : password,
//    })
// }

// const getElementVal = (id) => {
// return document.getElementById(id).value;

// };

// const signUp=()=>{
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   console.log(email,password)
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((result) => {
//     // Signed in 
//     document.write("you are sign up")
//     console.log(result)
//     // ...
//   })
//   .catch((error) => {
//     console.log(error.code);
//     console.log(error.message)
//     // ..
//   });
// }

