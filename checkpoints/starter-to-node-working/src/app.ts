import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes';
import { sequelize } from './db';

const app = express();

app.use(bodyParser.json());
app.use('/products', productRoutes);

sequelize.sync().then(() => {
  console.log('Database connected');
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});

export default app;