import * as productsService from '../services/products.service.js';

export const getProducts = async (req, res, next) => {
  try {
    const products = await productsService.fetchAllProducts();
    res.status(200).json({
      message: 'Lista de productos',
      payload: products
    });
  } catch (err) {
    next(err);
  }
};

export const getProduct = async (req, res) => {
  try {
    const { codigo } = req.params;
    const product = await productsService.fetchProductByCodigo(codigo);
    res.status(200).json({
      message: 'Producto encontrado',
      payload: product
    });
  } catch (error) {
    if (error.message === 'Producto no encontrado') {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(500).json({ message: 'error interno del servidor', error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { codigo, nombre, precio, stock } = req.body;
    const newProduct = {
      codigo: String(codigo),
      nombre,
      precio: +precio,
      stock: +stock || 0
    };
    const product = await productsService.addProduct(newProduct);
    res.status(201).json({
      message: 'Producto creado correctamente',
      payload: product
    });
  } catch (error) {
    if (error.message && error.message.includes('Ya existe un producto con ese código')) {
      return res.status(409).json({ message: "Ya existe un producto con ese código" });
    }
    res.status(500).json({ message: "error interno del servidor", error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { codigo } = req.params;
    await productsService.removeProduct(codigo);
    res.status(204).send();
  } catch (error) {
    if (error.message === 'Producto no encontrado') {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(500).json({ message: 'error interno del servidor', error: error.message });
  }
}; 
