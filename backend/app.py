from flask import Flask, render_template
from elasticsearch import Elasticsearch
from models.response import ResponseModel

app = Flask(__name__)
es = Elasticsearch("http://localhost:9200")


@app.route('/search')
def search():

    return ResponseModel(code=1, message='message', data='es.indices').toJson(), 200


if __name__ == '__main__':
    app.run(host='localhost', port=8000, debug=True)
