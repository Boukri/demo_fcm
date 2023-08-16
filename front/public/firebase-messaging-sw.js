// firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");


const firebaseConfig = {
  apiKey: "AIzaSyAUq5N9Gtls54CDeP04gRIKPbcxJS6ZEas",
  authDomain: "ilan25.firebaseapp.com",
  projectId: "ilan25",
  storageBucket: "ilan25.appspot.com",
  messagingSenderId: "316272350686",
  appId: "1:316272350686:web:300fb38e15e9e5f2d0794f",
  measurementId: "G-PYS940CN0S"
};


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});