from django.contrib.auth.models import User
from django.http import Http404, HttpRequest
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import UserSerializer


class Register(APIView):
    def post(self, request: HttpRequest, format=None) -> Response:
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(username=request.data['username'])
            user.set_password(request.data['password'])
            user.save()
            token = Token.objects.create(user=user)
            return Response({"token": token.key, "user": serializer.data})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Login(APIView):
    def post(self, request: HttpRequest, format=None) -> Response:
        return Response({})
    
class Logout(APIView):
    def post(self, request: HttpRequest, format=None) -> Response:
        return Response({})
    
class Test_Token(APIView):
    def get(self, request: HttpRequest, id: int, format=None) -> Response:
        return Response({})
