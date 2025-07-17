import express from 'express';
import cors from 'cors';
import productRouter from './routes/products.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// CORS básico
app.use(cors());

// Express
app.use(express.json());

// Rutas
app.use('/api/products', productRouter);

// Middleware para rutas desconocidas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Middleware de manejo de errores generales
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

