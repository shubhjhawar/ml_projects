from django.urls import path
from .views import CarClassiferView

urlpatterns = [
    path('classification_car', CarClassiferView.as_view())
]
