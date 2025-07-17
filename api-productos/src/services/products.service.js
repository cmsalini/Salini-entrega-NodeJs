import * as productModel from '../models/product.model.js';

export const fetchAllProducts = async () => {
  return await productModel.getAllProducts();
};

export const fetchProductByCodigo = async (codigo) => {
  return await productModel.getProductByCodigo(codigo);
};

export const addProduct = async (product) => {
  return await productModel.createProduct(product);
};

export const removeProduct = async (codigo) => {
  return await productModel.deleteProductByCodigo(codigo);
}; 