from flask import Flask
from asmanity.core import app
import asmanity.views

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
