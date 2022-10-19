import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  getDoc,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";


// Funcion que trae todos los productos
export const getAllProducts = () => {
  const db = getFirestore();
  const itemCollecition = collection(db, "items");
  return getDocs(itemCollecition);
};

// Funcion que trae los productos por categoria
export const getProductsByCategory = (categoryid) => {
  const db = getFirestore();
  const category = query(
    collection(db, "items"),
    where("category", "==", categoryid)
  );
  return getDocs(category);
};

// Funcion que trae los prodcutos por id
// recibe el id del producto seleccionado
// devuelve la informacion del item.id
export const getProductById = (id) => {
  const db = getFirestore();
  const itemId = doc(db, "items", id);
  return getDoc(itemId);
};

// Funcion para guardar los productos que traigo de FakeStoreApi
// Recibe los datos de la api
// Guarda en una nueva coleccion 'items' en firestore
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

// Funcion para crear las ordenes
// Recibe un objeto con el comprador, el producto, la fecha, estado y total
// Guarda en una nueva coleccion 'orders' en firestore
// Devuelve el id de la orden
export const setOrder = async (buyer, cart, total) => {
  const db = getFirestore();
  let order = {
    buyer: {
      name: buyer.fullName,
      email: buyer.email,
      phone: buyer.phoneNumber,
    },
    total: total(),
    date: serverTimestamp(),
    items: [...cart]
  }
  const resolve = await addDoc(collection(db, "orders"), order);
  console.log(resolve)
  return resolve.id;
};

// funcion para guardar los usuarios en firebase
// Recibe los datos de los imputs de registro
// Los guarda en una nueva coleccion 'users' en fireStore
export const setUser = async (data) => {
  const db = getFirestore();
  const user = await addDoc(collection(db, "users"), {
    userName: data.userName,
    email: data.email,
    password: data.password,
    phoneNumber: data.phone,
    adress: data.adress,
    uid: data.uid,
  });
  console.log(user);
};
