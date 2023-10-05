from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .utils.car_classifier import classify
from .utils.car_price_estimator import predict
from .utils.loan_application import apply

class CarClassiferView(APIView):
    def post(self, request):
        buying = request.data.get('buying', '')
        maint = request.data.get('maint', '')
        doors = request.data.get('doors', '')
        persons = request.data.get('persons', '')
        lug_boot = request.data.get('lug_boot', '')
        safety = request.data.get('safety', '')

        prediction = classify(buying, maint, doors, persons, lug_boot, safety)

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
    
    
class LoanApplicationView(APIView):
    def post(self, request):
        # print(apply())
        # self_employed, loan_amount, loan_amount_term, applicant_income, coapplicant_income, credit_history
        self_employed = request.data.get('self_employed', '')
        loan_amount = request.data.get('loan_amount','')
        loan_amount_term = request.data.get('loan_amount_term', '')
        applicant_income = request.data.get('applicant_income', '')
        coapplicant_income = request.data.get('coapplicant_income', '')
        credit_history = request.data.get('credit_history', '')

        answer = apply(self_employed, loan_amount, loan_amount_term, applicant_income, coapplicant_income, credit_history)
        return Response({"success":answer}, status=status.HTTP_200_OK)