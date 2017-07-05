import firebase from 'firebase';

try{
  var config = {
   apiKey: "AIzaSyBcHkY3xFRdOLsgxngTnIWjLfzjhEBe10M",
   authDomain: "todo-app-9017e.firebaseapp.com",
   databaseURL: "https://todo-app-9017e.firebaseio.com",
   projectId: "todo-app-9017e",
   storageBucket: "todo-app-9017e.appspot.com",
   messagingSenderId: "182224097206"
 };
 firebase.initializeApp(config);
}catch(e){
  console.log(e);
}

export var firebaseRef = firebase.database().ref()

export default firebase;
