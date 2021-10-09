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
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.appId,
};

const app = firebase.initializeApp(firebaseConfig);

export const getProducts = (setListProducts, category) => {
  if (category === "ofertas") {
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
  } else if (category) {
    getDocs(
      query(collection(db, "products"), where("category", "==", category))
    )
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
  } else {
    getDocs(collection(db, "products"))
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
      getDocs(collection(db, "products"))
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
  }
};

export const getProductsById = (title, setItemDetail) => { 
  getDoc(doc(db, "products", title))
    .then((querySnapshot) => {
      
      const product = { id: querySnapshot.id, ...querySnapshot.data() };
      setItemDetail(product);
    })
    .catch((error) => {
      console.log("Error searching intems", error);
    });

  return () => {
    setItemDetail(undefined);
  };
};

export const db = getFirestore(app);
