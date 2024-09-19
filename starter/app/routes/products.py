from flask import Blueprint, jsonify, request, Response, make_response
from typing import List, Dict, Any, Optional, Tuple
from app.models.product import Product
from app import db

products_bp = Blueprint('products', __name__)

@products_bp.route('/products', methods=['GET'])
def get_products() -> Response:
    products = Product.query.all()
    return make_response(jsonify({'products': [product.to_dict() for product in products]}), 200)

@products_bp.route('/products/<int:id>', methods=['GET'])
def get_product(id: int) -> Response: 
    product = Product.query.get(id)
    if product:
        return make_response(jsonify(product.to_dict()), 200)
    else:
        return make_response(jsonify({'message': 'Product not found'}), 404)

@products_bp.route('/products', methods=['POST'])
def create_product() -> Response: 
    new_product = Product(
        name=request.json['name'],
        price=request.json['price'],
        description=request.json.get('description', '')
    )
    db.session.add(new_product)
    db.session.commit()
    return make_response(jsonify(new_product.to_dict()), 201)

@products_bp.route('/products/<int:id>', methods=['PUT'])
def update_product(id: int) -> Response: 
    product = Product.query.get(id)
    if product:
        product.name = request.json.get('name', product.name)
        product.price = request.json.get('price', product.price)
        product.description = request.json.get('description', product.description)
        db.session.commit()
        return make_response(jsonify(product.to_dict()), 200)
    else:
        return make_response(jsonify({'message': 'Product not found'}), 404)

@products_bp.route('/products/<int:id>', methods=['DELETE'])
def delete_product(id: int) -> Response:
    product = Product.query.get(id)
    if product:
        db.session.delete(product)
        db.session.commit()
        return make_response(jsonify({'message': 'Product deleted'}), 200)
    else:
        return make_response(jsonify({'message': 'Product not found'}), 404)