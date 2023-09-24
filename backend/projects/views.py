from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .utils.car_classifier import load_model, classify, test

class CarClassiferView(APIView):
    def get(self, request):
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
