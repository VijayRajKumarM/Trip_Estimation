#from flask import Flask
#from flask import jsonify
'''from flask import Flask
from flask import jsonify
app = Flask(__name__)
print(" I AM IN THE SERVER")
@app.route('/')
def func():
     data = {'name': 'John', 'age': 30}
     return jsonify(data)
if __name__ == "__main__":
    app.run(debug=True,port=5000)'''

from flask import Flask, request

app = Flask(__name__)

@app.route('/led', methods=['GET', 'POST'])
def led():
    count = 1
    if request.method == 'POST':
        count = request.json['count']
        return {'backendCount': count}
    return {'backendCount': count}
if __name__ == '__main__':
    app.run(debug=True,port=5000)


