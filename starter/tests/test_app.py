import pytest
from flask.testing import FlaskClient
from app import create_app
from typing import Generator
from flask import Flask

@pytest.fixture
def client() -> Generator[FlaskClient, None, None]: 
    app: Flask = create_app()
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_get_products(client: FlaskClient) -> None:
    rv = client.get('/products')
    assert rv.status_code == 200