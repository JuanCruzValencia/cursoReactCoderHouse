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
//recibe el id del producto seleccionado
//devuelve la informacion del item.id
export const getProductById = (id) => {
  const db = getFirestore();
  const itemId = doc(db, "items", id);
  return getDoc(itemId);
};

//Funcion para guardar los productos que traigo de FakeStoreApi
//recibe los datos de la api
//los guarda en el firestore de firebase
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

//Funcion para crear las ordenes
//recibe un objeto con el comprador, el producto, la fecha, estado y total
//devuelve el id de la orden
export const setOrder = async (data) => {
  const db = getFirestore();
  const order = await addDoc(collection(db, "orders"), data);
  return order.id;
};


//funcion para guardar los usuarios en firebase
export const setUser = async (data) => {
  const db = getFirestore()
  const user = await addDoc(collection(db, "users"), {
    userName: data.userName,
    email: data.email,
    password: data.password,
    phoneNumber: data.phone,
    adress: data.adress,
    uid: data.uid
  })
  console.log(user)
}