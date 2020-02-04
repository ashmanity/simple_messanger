from flask import Flask
from warprodaction.core import app
import warprodaction.views

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
