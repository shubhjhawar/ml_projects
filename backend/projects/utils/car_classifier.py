import os
import joblib

def load_model():
    # Get the directory of the current script
    script_dir = os.path.dirname(os.path.abspath(__file__))

    # Construct the absolute path to the .joblib file
    joblib_file_path = os.path.join(script_dir, 'cc.joblib')

    # Load the model
    loaded_model = joblib.load(joblib_file_path)
    return loaded_model


import numpy as np  # Import numpy for NaN checks

def classify(buying, maint, doors, persons, lug_boot, safety):
    car_model = load_model()

    if buying == 'vhigh':
        b = 0
    elif buying == 'high':
        b = 1
    elif buying == 'med':
        b = 2
    elif buying == 'low':
        b = 3

    if maint == 'vhigh':
        m = 0
    elif maint == 'high':
        m = 1
    elif maint == 'med':
        m = 2
    elif maint == 'low':
        m = 3

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

    # Check for NaN values in input data
    if any(np.isnan([b, m, d, persons, l, s])):
        return "Invalid input. Some parameters contain NaN values."

    prediction = car_model.predict([[b, m, d, int(persons), l, s]])

    if prediction == 0:
        p = 'unacc'
    elif prediction == 1:
        p = 'acc'
    elif prediction == 2:
        p = 'vgood'
    elif prediction == 3:
        p = 'good'

    message = 'Your class is classified as {}'.format(p)
    return message

def test(buying, maint, doors, persons, lug_boot, safety):
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