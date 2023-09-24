from django.urls import path
from .views import MyAPIView

urlpatterns = [
    path('', MyAPIView.as_view())
]
