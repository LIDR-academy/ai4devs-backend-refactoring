from flask_sqlalchemy.model import Model
from app.extensions import db
from sqlalchemy.orm import Mapped
from sqlalchemy import Integer, String, Float
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from flask_sqlalchemy import SQLAlchemy
    db: SQLAlchemy = db
else:
    db = db

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(200), nullable=True)

    def __init__(self, name: str, price: float, description: str = "") -> None:
        self.name = name
        self.price = price
        self.description = description

    def to_dict(self) -> dict:
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description
        }