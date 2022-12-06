from flask import Flask, render_template
from models.response import ResponseModel

app = Flask(__name__)


@app.route('/search')
def search():
    return ResponseModel(code=1, message='message', data='data').toJson(), 200


if __name__ == '__main__':
    app.run(host='localhost', port=8000, debug=True)
