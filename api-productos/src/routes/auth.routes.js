import { Router } from 'express';
import { login } from '../controllers/auth.controller.js';

const router = Router();

// Ruta de login
router.post('/login', login);

export default router;
