from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .utils.car_classifier import load_model, classify, test
from .utils.car_price_estimator import predict

class CarClassiferView(APIView):
    def post(self, request):
        buying = request.data.get('buying', '')
        maint = request.data.get('maint', '')
        doors = request.data.get('doors', '')
        persons = request.data.get('persons', '')
        lug_boot = request.data.get('lug_boot', '')
        safety = request.data.get('safety', '')

        prediction = test(buying, maint, doors, persons, lug_boot, safety)

        response_data = {
            "prediction": prediction
        }

        return Response(response_data, status=status.HTTP_200_OK)
    
class CarPredictionView(APIView):
    def post(self, request):
        year = request.data.get('year', '')
        price = request.data.get('price', '')
        km = request.data.get('km', '')
        owner = request.data.get('owner', '')
        fuel_type = request.data.get('fuel_type', '')
        buy_type = request.data.get('buy_type', '')
        transmission_type = request.data.get('transmission_type', '')

        prediction = predict(year, price, owner, km, fuel_type, buy_type, transmission_type)

        response_data = {
            "prediction": prediction
        }

        return Response(response_data, status=status.HTTP_200_OK)

