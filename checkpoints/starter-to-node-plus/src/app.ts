import express from 'express';
import productRoutes from './routes/productRoutes';
import sequelize from './config/config';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();

export default app;