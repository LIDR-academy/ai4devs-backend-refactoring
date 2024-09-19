from app import create_app
from typing import Any
from flask import Flask

app: Flask = create_app()

if __name__ == '__main__':
    app.run(debug=True)