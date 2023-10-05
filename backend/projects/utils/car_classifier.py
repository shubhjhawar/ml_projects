import numpy as np 
import os
import pickle


def load_model():
    # Get the directory of the current script
    script_dir = os.path.dirname(os.path.abspath(__file__))

    # Construct the absolute path to the .pkl file
    pkl_file_path = os.path.join(script_dir, 'car_classifier.pkl')

    # Load the model
    with open(pkl_file_path, 'rb') as file:
        loaded_model = pickle.load(file)

    return loaded_model


def classify(buying, maint, doors, persons, lug_boot, safety):
    print(buying, maint, doors, persons, lug_boot, safety)

    if buying == 'vhigh':
        b = 0
    elif buying == 'high':
        b = 1
    elif buying == 'med':
        b = 2
    elif buying == 'low':
        b = 3

    if maint == 'vhigh':
        m = 3
    elif maint == 'high':
        m = 2
    elif maint == 'med':
        m = 1
    elif maint == 'low':
        m = 0

    if doors == '2':
        d = 0
    elif doors == '3':
        d = 1
    elif doors == '4':
        d = 2
    else:
        d = 3

    if lug_boot == 'small':
        l = 0
    elif lug_boot == 'med':
        l = 1
    elif lug_boot == 'big':
        l = 2

    if safety == 'low':
        s = 0
    elif safety == 'med':
        s = 1
    elif safety == 'high':
        s = 2

    print(b, m, d, persons, l, s)

    car_model = load_model()
    prediction = car_model.predict([[b, m, d, int(persons), l, s]])

    if prediction == 0:
        p = 'unacc'
    elif prediction == 1:
        p = 'acc'
    elif prediction == 2:
        p = 'good'
    elif prediction == 3:
        p = 'vgood'

    return p