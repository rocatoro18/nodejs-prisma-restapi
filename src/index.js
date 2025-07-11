import express from 'express';

import productsRoutes from './routes/products.routes.js';
import categoriesRoutes from './routes/categories.routes.js';

const app = express();

// ENVIAR Y RECIBIR DATOS EN JSON
app.use(express.json());

app.use('/api', productsRoutes);
app.use('/api',categoriesRoutes);

app.listen(3000);
console.log('Server on port', 3000);