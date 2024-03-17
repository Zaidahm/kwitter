npm install firebase
      
      
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwV5dV0t4Dznct8o3kqysVz2CxNSA_Nhk",
  authDomain: "kwitter-d5a10.firebaseapp.com",
  databaseURL: "https://kwitter-d5a10-default-rtdb.firebaseio.com",
  projectId: "kwitter-d5a10",
  storageBucket: "kwitter-d5a10.appspot.com",
  messagingSenderId: "265731820530",
  appId: "1:265731820530:web:9429052830f9067c1eb96b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Name -" + Room_names);
    row="<div class='room name' id="+Room_Names+" onclick='redirectToRoomName(this.id)'>#" +Room_Names+"</div><hr>"
      //End code
      });});}
getData();
function addRoom(){
  room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);

window.location ="kwitter_page.html";
}
function redirectToRoomName(){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html"
}

