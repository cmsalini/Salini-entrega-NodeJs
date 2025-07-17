import { collection, doc, getDocs, addDoc, deleteDoc, query, where } from 'firebase/firestore';
import { db } from '../config/db.js';

const productsCollection = 'productos';
const products = collection(db, productsCollection);

export const getAllProducts = async () => {
  try {
    const querySnapshot = await getDocs(products);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw error;
  }
};


export const getProductByCodigo = async (codigo) => {
  try {
    const q = query(products, where('codigo', '==', String(codigo)));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      throw new Error('Producto no encontrado');
    }
    const docSnap = querySnapshot.docs[0];
    return { id: docSnap.id, ...docSnap.data() };
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (product) => {
  try {
    const q = query(products, where('codigo', '==', String(product.codigo)));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      throw new Error('Ya existe un producto con ese código');
    }
    const newProduct = await addDoc(products, product);
    return { id: newProduct.id, ...product };
  } catch (error) {
    throw error;
  }
};


export const deleteProductByCodigo = async (codigo) => {
  try {
    const q = query(products, where('codigo', '==', String(codigo)));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      throw new Error('Producto no encontrado');
    }
    const docId = querySnapshot.docs[0].id;
    await deleteDoc(doc(db, productsCollection, docId));
    return true;
  } catch (error) {
    throw error;
  }
};