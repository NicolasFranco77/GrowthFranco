import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAd3PiS4RFqvG8VNoeQSRuDQf8FcfOKtyc",
  authDomain: "growth-7d55d.firebaseapp.com",
  projectId: "growth-7d55d",
  storageBucket: "growth-7d55d.appspot.com",
  messagingSenderId: "363756914226",
  appId: "1:363756914226:web:9a609934c4c1d8ae649e2b",
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => {
    return app
}

export const db = getFirestore(app)
