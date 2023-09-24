from django.urls import path
from .views import CarClassiferView

urlpatterns = [
    path('', CarClassiferView.as_view())
]
