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

'''from flask import Flask, request

app = Flask(__name__)

@app.route('/led', methods=['GET', 'POST'])
def led():
    count = 1
    if request.method == 'POST':
        count = request.json['count']
        return {'backendCount': count}
    return {'backendCount': count}
if __name__ == '__main__':
    app.run(debug=True,port=5000) '''

from flask import Flask, request, jsonify
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import joblib
from joblib import load 
import pandas as pd 
import numpy as np
from datetime import datetime
app = Flask(__name__)
model = load(r"C:\Users\vijay\deva\ui_page\flask_server\random_forest.joblib")
@app.route('/convert', methods=['POST','GET'])
def convert():
    
        source = request.form['setChoice']
        print(source)
        target = request.form['setChoice1']
        print(target)
        airlines= request.form['setChoice2']
        print(airlines)
        cla = request.form['setChoice3']
        print(cla)
        time = request.form['setChoice4']
        print(time)
        stops = request.form['setChoice5']
        print(stops)
        date=request.form['setChoice6']
        print(date)
        dto=datetime.strptime(date,"%Y-%m-%d")
        cdt=datetime.today().strftime('%Y-%m-%d')
        cdo=datetime.strptime(cdt,"%Y-%m-%d")
        tdelta=dto-cdo
        no_of_days=tdelta.days
        print(no_of_days)
        stops1=int(stops)
        print(stops1)
        dic={'stops':[stops1],'days_left':[no_of_days], 'airline_AirAsia':[0], 'airline_Air_India':[0],
       'airline_GO_FIRST':[0], 'airline_Indigo':[0], 'airline_SpiceJet':[0],
       'airline_Vistara':[0], 'source_city_Bangalore':[0], 'source_city_Chennai':[0],
       'source_city_Delhi':[0], 'source_city_Hyderabad':[0], 'source_city_Kolkata':[0],
       'source_city_Mumbai':[0], 'class_Business':[0], 'class_Economy':[1],
       'departure_time_Afternoon':[0], 'departure_time_Early_Morning':[0],
       'departure_time_Evening':[0], 'departure_time_Late_Night':[0],
       'departure_time_Morning':[0], 'departure_time_Night':[0],
       'destination_city_Bangalore':[0], 'destination_city_Chennai':[0],
       'destination_city_Delhi':[0], 'destination_city_Hyderabad':[0],
       'destination_city_Kolkata':[0], 'destination_city_Mumbai':[0]}
        dic["airline_"+airlines]=[1]
        dic["source_city_"+source]=[1]
        dic["destination_city_"+target]=[1]
        dic["departure_time_"+time]=[1]
        
        df = pd.DataFrame(dic)
        prediction = model.predict(df)
        return {'prediction': str(prediction)}
        
   

if __name__ == '__main__':
    app.run(debug='True',port=5000)


