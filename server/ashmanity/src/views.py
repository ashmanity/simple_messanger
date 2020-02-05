from flask import Flask
from .core import app


@app.route("/")
def main_page():
    return "hello, view!"
