/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBTH3PnkmkCvHe81I0asDDd-iGrN6MuIU0',
  authDomain: 'scryber-iot-87bdc.firebaseapp.com',
  databaseURL: 'https://scryber-iot-87bdc-default-rtdb.firebaseio.com',
  projectId: 'scryber-iot-87bdc',
  storageBucket: 'scryber-iot-87bdc.appspot.com',
  messagingSenderId: '115132797299',
  appId: '1:115132797299:web:65b88c274347e3277c3506',
  measurementId: 'G-YKWVW4EYHK',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const db = firebase.firestore();
