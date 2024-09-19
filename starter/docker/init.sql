DO $$ 
BEGIN
   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'products_db') THEN
      CREATE DATABASE products_db;
   END IF;
END $$;

-- Connect to the products_db database
\c products_db

-- Create the products table
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    price FLOAT NOT NULL,
    description VARCHAR(200)
);

-- Insert data into the products table
INSERT INTO products (id, name, price, description) VALUES
(1, 'Laptop', 1500.00, 'A powerful laptop for work and play.'),
(2, 'Smartphone', 800.00, 'A smartphone with excellent camera and performance.'),
(3, 'Tablet', 500.00, 'A tablet with a touch screen and good quality.'),
(4, 'Monitor', 200.00, 'A high-definition monitor for your computer.'),
(5, 'Teclado', 100.00, 'A mechanical keyboard for your computer.'),
(6, 'Mouse', 50.00, 'An optical mouse for your computer.'),
(7, 'Impresora', 150.00, 'A laser printer for your computer.'),
(8, 'Altavoz', 30.00, 'A Bluetooth speaker for your computer.'),
(9, 'Cámara', 250.00, 'A digital camera for your photos and videos.'),
(10, 'Auriculares', 70.00, 'Wireless headphones with noise cancellation.'),
(11, 'Product 11', 110.00, 'Description of product 11.'),
(12, 'Product 12', 120.00, 'Description of product 12.'),
(13, 'Product 13', 130.00, 'Description of product 13.'),
(14, 'Product 14', 140.00, 'Description of product 14.'),
(15, 'Product 15', 150.00, 'Description of product 15.'),
(16, 'Product 16', 160.00, 'Description of product 16.'),
(17, 'Product 17', 170.00, 'Description of product 17.'),
(18, 'Product 18', 180.00, 'Description of product 18.'),
(19, 'Product 19', 190.00, 'Description of product 19.'),
(20, 'Product 20', 200.00, 'Description of product 20.');