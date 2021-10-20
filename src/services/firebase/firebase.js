import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  writeBatch,
  addDoc,
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

export const getProducts = (key, operator, value) => {
  return new Promise((resolve, reject) => {
    const collectionQuery =
      key && operator && value
        ? query(collection(db, "products"), where(key, operator, value))
        : collection(db, "products");

    getDocs(collectionQuery)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        resolve(products);
      })
      .catch((error) => {
        reject("error al obtener productos", error);
      });
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve, reject) => {
    getDoc(doc(db, "products", id))
      .then((querySnapshot) => {
        const product = { id: querySnapshot.id, ...querySnapshot.data() };
        resolve(product);
      })
      .catch((error) => {
        reject("Error buscando item", error);
      });
  });
};

export const createOrder = (objOrder) => {
  return new Promise((resolve, reject) => {
    const batch = writeBatch(db);
    const outOfStock = [];

    objOrder.items.forEach((prod, i) => {
      getDoc(doc(db, "products", prod.id)).then((DocumentSnapshot) => {
        if (DocumentSnapshot.data().stock >= objOrder.items[i].quantity) {
          batch.update(doc(db, "products", DocumentSnapshot.id), {
            stock: DocumentSnapshot.data().stock - objOrder.items[i].quantity,
          });
        } else {
          outOfStock.push({
            ...DocumentSnapshot.data(),
            id: DocumentSnapshot.id,
          });
        }
      });
    });

    if (outOfStock.length === 0) {
      addDoc(collection(db, "orders"), objOrder)
        .then(() => {
          batch.commit().then(() => {
            resolve("La orden se ejecutó con éxito");
          });
        })
        .catch((error) => {
          reject("Error al ejecutar la orden: ", error);
        });
    }
  });
};

export const getUserId = (objOrder) => {
  return new Promise((resolve, reject) => {
    getDocs(query(collection(db, "orders"), where("date", "==", objOrder.date)))
      .then((querySnapshot) => {
        var userId = querySnapshot.docs.map((doc) => {
          return doc.id;
        });
        resolve(userId);
      })
      .catch((error) => {
        reject("Error al obtener user id", error);
      });
  });
};

export const db = getFirestore(app);
