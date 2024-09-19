import dotenv from 'dotenv';

dotenv.config();

export const config = {
  secretKey: process.env.SECRET_KEY || 'you-will-never-guess',
  databaseUrl: process.env.DATABASE_URL || 'postgresql://localhost:5432/products_db',
};