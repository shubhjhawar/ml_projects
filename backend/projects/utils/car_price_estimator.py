import os
import numpy as np
import pickle

def load_model():
    # Get the directory of the current script
    script_dir = os.path.dirname(os.path.abspath(__file__))

    # Construct the absolute path to the .pkl file
    pkl_file_path = os.path.join(script_dir, 'car_price.pkl')

    # Load the model
    with open(pkl_file_path, 'rb') as file:
        loaded_model = pickle.load(file)

    return loaded_model

def predict(year, price, owner, km, fuel_type, buy_type, transmission_type):
    car_model = load_model()

    price = int(price)/10000

    Kms_Driven = np.log(int(km))
    year = 2020 - int(year)
    Fuel_Type_Diesel = 1 if fuel_type == 'Diesel' else 0
    Fuel_Type_Petrol = 1 if fuel_type == 'Petrol' else 0
    buy_type = 1 if buy_type == 'Individual' else 0
    transmission_type = 1 if transmission_type == 'Manual' else 0

    prediction = car_model.predict([[price, Kms_Driven, owner, year, Fuel_Type_Diesel, Fuel_Type_Petrol, buy_type, transmission_type]])
    output = round(prediction[0], 2)
    return output * 10000
