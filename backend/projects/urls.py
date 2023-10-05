from django.urls import path
from .views import CarClassiferView, CarPredictionView, LoanApplicationView

urlpatterns = [
    path('classification_car', CarClassiferView.as_view()),
    path('regression_car', CarPredictionView.as_view()),
    path('loan_application',LoanApplicationView.as_view()),
]
