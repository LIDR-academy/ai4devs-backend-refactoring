import os
from typing import Any

class Config:
    SECRET_KEY: str = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    JSONIFY_PRETTYPRINT_REGULAR: bool = True
    SQLALCHEMY_DATABASE_URI: str = os.environ.get('DATABASE_URL') or 'sqlite:///app.db'
    SQLALCHEMY_TRACK_MODIFICATIONS: bool = False