import { Request, Response } from 'express';
import Product from '../models/product';
import redisClient from '../config/redis';

const CACHE_EXPIRATION = 3600; // 1 hour

export const getProducts = async (req: Request, res: Response): Promise<Response> => {
  try {
    const cacheKey = 'products';
    const cachedProducts = await redisClient.get(cacheKey);

    if (cachedProducts) {
      console.log('Getting cached products!');
      return res.status(200).json({ products: JSON.parse(cachedProducts) });
    }

    const products = await Product.findAll();
    await redisClient.set(cacheKey, JSON.stringify(products), { EX: CACHE_EXPIRATION });

    return res.status(200).json({ products });
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const cacheKey = `product:${id}`;
    const cachedProduct = await redisClient.get(cacheKey);

    if (cachedProduct) {
      return res.status(200).json(JSON.parse(cachedProduct));
    }

    const product = await Product.findByPk(id);
    if (product) {
      await redisClient.set(cacheKey, JSON.stringify(product), { EX: CACHE_EXPIRATION });
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const createProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, price, description } = req.body;
    const newProduct = await Product.create({ name, price, description });

    // Invalidate cache
    await redisClient.del('products');

    return res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (product) {
      const { name, price, description } = req.body;
      await product.update({ name, price, description });

      // Invalidate cache
      await redisClient.del('products');
      await redisClient.del(`product:${id}`);

      return res.status(200).json(product);
    } else {
      return res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error updating product:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (product) {
      await product.destroy();

      // Invalidate cache
      await redisClient.del('products');
      await redisClient.del(`product:${id}`);

      return res.status(200).json({ message: 'Product deleted' });
    } else {
      return res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};