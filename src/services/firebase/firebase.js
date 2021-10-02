import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd3PiS4RFqvG8VNoeQSRuDQf8FcfOKtyc",
  authDomain: "growth-7d55d.firebaseapp.com",
  projectId: "growth-7d55d",
  storageBucket: "growth-7d55d.appspot.com",
  messagingSenderId: "363756914226",
  appId: "1:363756914226:web:9a609934c4c1d8ae649e2b",
};

const app = firebase.initializeApp(firebaseConfig);

export const getAllProducts = (setListProducts) => {
  getDocs(collection(db, "products")).then((querySnapshot) => {
    const products = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setListProducts(products);
  }).catch((error) => {
    console.log("Error searching intems", error);
  });
  return () => {
    setListProducts(undefined);
  };
};

export const getOffers = (setListProducts) => {
  getDocs(query(collection(db, "products"), where("oferta", "==", true)))
    .then((querySnapshot) => {
      const products = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      setListProducts(products);
    })
    .catch((error) => {
      console.log("Error searching intems", error);
    });

  return () => {
    setListProducts(undefined);
  };
};

export const getProductsByCagetegory = (setListProducts, category) => {
  getDocs(
    query(collection(db, "products"), where("category", "==", category))
  ).then((querySnapshot) => {
    const products = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    setListProducts(products);
  }).catch((error) => {
    console.log("Error searching intems", error);
  });
  return () => {
    setListProducts(undefined);
  };
};

export const getProductsById = (title, setItemDetail) => {
  getDoc(doc(db, "products", title)).then((querySnapshot) => {
    const product = { id: querySnapshot.id, ...querySnapshot.data() };
    setItemDetail(product);
  }).catch((error) => {
    console.log("Error searching intems", error);
  });

  return () => {
    setItemDetail(undefined);
  };
};

export const db = getFirestore(app);
