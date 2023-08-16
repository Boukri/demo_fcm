
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyAUq5N9Gtls54CDeP04gRIKPbcxJS6ZEas",
  authDomain: "ilan25.firebaseapp.com",
  projectId: "ilan25",
  storageBucket: "ilan25.appspot.com",
  messagingSenderId: "316272350686",
  appId: "1:316272350686:web:300fb38e15e9e5f2d0794f",
  measurementId: "G-PYS940CN0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);





export const requestPermission = () => {
    console.log("Requesting User Permission......");
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification User Permission Granted.");
  
        return getToken(messaging, { vapidKey: `BGj1CgbRD4yFiDOhBWGAuIApu3IS9lOtGpjMWTioPHJaK1wTNPNoAzMW5zydRR8UreDcsYo-59uuL0ed9sf1xM0` })
          .then((currentToken) => {
            if (currentToken) {
              console.log('Client Token: ', currentToken);
              
            } else {
              
              console.log('Failed to generate the app registration token.');
            }
          })
          .catch((err) => {
            console.log('An error occurred when requesting to receive the token.', err);
          });
      } else {
        console.log("User Permission Denied.");
      }
    });
  }

requestPermission();


export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log('listing...', payload)
      resolve(payload);
    });
});


