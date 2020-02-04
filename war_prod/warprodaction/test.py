from pymongo import MongoClient

client = MongoClient()
db = client["Autorization"]
collection = db["Users"]

for doc in collection.find({}):
    print(doc)
