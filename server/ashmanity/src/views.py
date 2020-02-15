from flask import Flask, jsonify
from random import randint
from .core import app

from pymongo import MongoClient

client = MongoClient()
bd = client["Autorization"]
collection = bd["Users"]


@app.route("/", methods=["GET"])
def main_page():
    data = {"number": randint(1, 100)}
    return jsonify(data), 200


@app.route("/", methods=["POST"])
def take_user_data(user_data):
    collection.insert_one(user_data)
    return 200

