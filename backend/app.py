from flask import Flask, render_template, request, jsonify, make_response
from elasticsearch import Elasticsearch
from models.response import ResponseModel
from Netflix import *
import json
import os

password="d5zSA7owHBXZvwJ7MjeT"

app = Flask(__name__)
es = Elasticsearch("http://localhost:9200", basic_auth=("elastic", password))

# Add all local document into 'Netflix' index in elasticsearch
@app.route('/initialize')
def initialize():
    path = os.getcwd() + "/Netflix"
    dir_list = os.listdir(path)
    for i in dir_list:
        f = open("./Netflix/" + i)
        data = json.load(f)
        for j in data["catalogItems"]:
            res = es.index(index="netflix", id=int(j['titleId']), document=j)


# Search Route with text return all Json Document
@app.route('/search')
def search():
    text = request.args.get('text',type=str)
    query = {
        "query_string" : {
            "query" : ""
        }
    }
    query["query_string"]["query"] = text
    resp = str(es.search(index="netflix", query=query, size=7000))
    return ResponseModel(code=200, message='Ok()', data=resp).toJson(), 200


@app.route('/Motherfuckers')
def motherfuckers():
    return ResponseModel(code=200, message='Ok()', data="resp").toJson(), 200

if __name__ == '__main__':
    app.run(host='localhost', port=8000, debug=True)
