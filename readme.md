# AI4Devs - Backend Demo

*Powered by:*
![Python](https://img.shields.io/badge/python-3776AB?logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/flask-000000?logo=flask&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/postgresql-336791?logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-2496ED?logo=docker&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=white)

## Description

This project allows users to perform CRUD operations on a list of products, showcasing how to interact with a RESTful API using tools like **Postman**, **Insomnia**, or **curl**.

### Libraries Used

- **Flask**: A lightweight WSGI web application framework in Python. It is designed with simplicity and flexibility in mind.
- **mypy**: An optional static type checker for Python that aims to combine the benefits of dynamic (or "duck") typing and static typing.
- **types-Flask**: Type stubs for Flask, providing type hints for better code completion and type checking.
- **gunicorn**: A Python WSGI HTTP Server for UNIX, which is a pre-fork worker model. It is used to serve the Flask application.
- **psycopg2-binary**: A PostgreSQL database adapter for Python. It is used to connect and interact with the PostgreSQL database.
- **flask_sqlalchemy**: An extension for Flask that adds support for SQLAlchemy, a SQL toolkit and Object-Relational Mapping (ORM) library for Python.

## Installation
To get started follow these steps:

```bash
cd starter
docker-compose up --d / docker compose up --build
```

## Running tests
```bash
pytest
```

## Usage
You can use **Postman**, **Insomnia**, or **curl** to test the endpoints.

### **1.1. Get all products**
```bash
curl -X GET http://localhost:5001/products
```

### **1.2. Get a product by ID**
```bash
curl -X GET http://localhost:5001/products/1
```

### **1.3. Create a new product**
```bash
curl -X POST http://localhost:5001/products \
-H 'Content-Type: application/json' \
-d '{
    "name": "Tablet",
    "price": 500.00,
    "description": "Una tablet ligera y potente."
}'
```

### **1.4. Update an existing product**
```bash
curl -X PUT http://localhost:5001/products/1 \
-H 'Content-Type: application/json' \
-d '{
    "price": 1400.00
}'
```

### **1.5. Delete a product**
```bash
curl -X DELETE http://localhost:5001/products/1
```

## Support
For support, please open an issue in the [issue tracker](https://github.com/your-repo/issues).
## Contributing
We welcome contributions! Please see our [contributing guidelines](CONTRIBUTING.md) for more details.

To get started with development:
1. Fork the repository
2. Clone your fork
3. Create a new branch for your feature or bugfix
4. Make your changes
5. Submit a pull request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.