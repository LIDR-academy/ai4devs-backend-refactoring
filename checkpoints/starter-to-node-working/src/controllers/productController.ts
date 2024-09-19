import { Request, Response } from 'express';
import { Product } from '../models/product';

export const getProducts = async (req: Request, res: Response): Promise<void> => {
  const products = await Product.findAll();
  res.status(200).json({ products });
};

export const getProduct = async (req: Request, res: Response): Promise<void> => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  const { name, price, description } = req.body;
  const newProduct = await Product.create({ name, price, description });
  res.status(201).json(newProduct);
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    const { name, price, description } = req.body;
    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    await product.save();
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    await product.destroy();
    res.status(200).json({ message: 'Product deleted' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};