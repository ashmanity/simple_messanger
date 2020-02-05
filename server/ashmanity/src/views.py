from flask import Flask, jsonify
from random import randint
from .core import app


@app.route("/")
def main_page():
    data = {"number": randint(1, 100)}
    return jsonify(data)
