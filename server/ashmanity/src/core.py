from flask import Flask

app = Flask(
    __name__,
    static_folder="~/messenger/simple_messanger/src/src/static",
    template_folder="~/messenger/simple_messanger/src/src",
)

