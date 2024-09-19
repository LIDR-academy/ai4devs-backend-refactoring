from flask import Flask
from app.extensions import db

def create_app() -> Flask:
    app = Flask(__name__)
    app.config.from_object('app.config.Config')

    db.init_app(app)

    from .routes.products import products_bp
    app.register_blueprint(products_bp)

    return app