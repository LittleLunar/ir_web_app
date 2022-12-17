from flask import Flask, render_template, request, jsonify, make_response
from elasticsearch import Elasticsearch
from flask_cors import CORS
from models.response import ResponseModel
from Netflix import *
import json
import os


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
es = Elasticsearch([{"scheme":"http",'host': 'localhost', 'port': 9200}])
print(es.ping())

# Add all local document into 'Netflix' index in elasticsearch
@app.route('/initialize')
def initialize():
    try:
        path = os.getcwd() + "/Netflix"
        dir_list = os.listdir(path)
        for i in dir_list:
            f = open("./Netflix/" + i)
            data = json.load(f)
            for j in data["catalogItems"]:
                res = es.index(index="netflix", id=int(j['titleId']), document=j)
        return ResponseModel(code=200, message="success", data="").toJson(), 200
    except:
        return ResponseModel(code=400, message="Exception occured", data="").toJson(), 200
        


# Search Route with text return all Json Document
@app.route('/search', methods=["GET"])
def search():
    text = request.args.get('text',type=str)
    page = request.args.get('page',type=int)
    size = request.args.get('size',type=int)
    start = (page - 1) * size
    query = {
        "query_string" : {
            "query" : text
        }
    }
    # query["query_string"]["query"] = text
    resp = es.search(index="netflix",body= { "query": query, "from": start, "size": size})
    data = json.dumps(resp["hits"])
    return ResponseModel(code=200, message='Ok()', data=data).toJson(), 200


@app.route('/Motherfuckers')
def motherfuckers():
    return ResponseModel(code=200, message='Ok()', data="resp").toJson(), 200

if __name__ == '__main__':
    app.run(host='localhost', port=8000, debug=True)
