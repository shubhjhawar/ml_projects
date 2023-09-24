from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class MyAPIView(APIView):
    def get(self, request):
        return Response({"something":"here"}, status=status.HTTP_200_OK)