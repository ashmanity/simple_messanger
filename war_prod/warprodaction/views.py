from .core import app
from flask import render_template, redirect, url_for, request
from collections import namedtuple
from pymongo import MongoClient

Message = namedtuple("Message", "fname lname")
messages = []

client = MongoClient()
db = client["Autorization"]
collection = db["Users"]


@app.route("/", methods=["GET"])
def main():
    return render_template("index.html", messages=messages)


@app.route("/add_message", methods=["POST"])
def add_message():
    lname = request.form["lname"]
    fname = request.form["fname"]
    messages.append(Message(fname, lname))
    intermediate = messages[-1]

    data = {"Fname": intermediate.fname, "Lname": intermediate.lname}
    collection.insert_one(data)
    return redirect(url_for("main"))

