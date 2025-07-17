import { Router } from 'express';
import * as productsController from '../controllers/products.controller.js';

const router = Router();

router.get('/', productsController.getProducts);
router.get('/:codigo', productsController.getProduct);
router.post('/', productsController.createProduct);
router.delete('/:codigo', productsController.deleteProduct);

export default router; 