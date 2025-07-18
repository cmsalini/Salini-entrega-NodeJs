import { Router } from 'express';
import * as productsController from '../controllers/products.controller.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', productsController.getProducts);
router.get('/:codigo', productsController.getProduct);
router.post('/', authenticateToken, productsController.createProduct);
router.delete('/:codigo', authenticateToken, productsController.deleteProduct);

export default router; 