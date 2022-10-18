import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  getDoc,
  doc,
  addDoc,
} from "firebase/firestore";

//Funcion que trae todos los productos
export const getAllProducts = () => {
  const db = getFirestore();
  const itemCollecition = collection(db, "items");
  return getDocs(itemCollecition);
};

//Funcion que trae los productos por categoria
export const getProductsByCategory = (categoryid) => {
  const db = getFirestore();
  const category = query(
    collection(db, "items"),
    where("category", "==", categoryid)
  );
  return getDocs(category);
};

//Funcion que trae los prodcutos por id
export const getProductById = (id) => {
  const db = getFirestore();
  const itemId = doc(db, "items", id);
  return getDoc(itemId);
};

//Funcion para guardar los productos que traigo de FakeStoreApi
export const setAllProducts = async (data) => {
  const db = getFirestore();
  await addDoc(collection(db, "items"), {
    title: data.title,
    category: data.category,
    price: data.price,
    description: data.description,
    image: data.image,
    stock: 50,
  });
};
