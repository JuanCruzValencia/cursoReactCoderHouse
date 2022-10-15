import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  getDoc,
  doc,
} from "firebase/firestore";

//Funcion que trae todos los productos
export const getAllProducts = () => {
  const db = getFirestore();
  const itemCollecition = collection(db, "Items");
  return getDocs(itemCollecition);
};

//Funcion que trae los productos por categoria
export const getProductsByCategory = (categoryid) => {
  const db = getFirestore();
  const category = query(
    collection(db, "Items"),
    where("category", "==", categoryid)
  );
  return getDocs(category);
};

//Funcion que trae los prodcutos por id
export const getProductById = (id) => {
  const db = getFirestore();
  const itemId = doc(db, "Items", id);
  return getDoc(itemId);
};
