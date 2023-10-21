from django.http import Http404, HttpRequest
from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView

from .models import Doze
from .serializers import DozeSerializer

# Create your views here.


class InsulineTypes(APIView):

    def get(request: HttpRequest, id: int = 0) -> JsonResponse:
        unit_choices = [{'value': value, 'label': label} for value, label in Doze.InsulineType.choices]
        return JsonResponse(unit_choices, safe=False)


class InslulineDozesList(APIView):

    def get(self, request: HttpRequest, format=None) -> JsonResponse:
        dozes = Doze.objects.filter(user=request.user)
        dozes_serializer = DozeSerializer(dozes, many=True)
        return JsonResponse(dozes_serializer.data, safe=False)

    def post(self, request: HttpRequest, format=None) -> JsonResponse:
        doze_data = JSONParser().parse(request)
        doze_serializer = DozeSerializer(data=doze_data, context=self.get_serializer_context())
        if doze_serializer.is_valid():
            doze_serializer.save()
            return JsonResponse('Save Successfully.', safe=False)
        return JsonResponse(doze_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_serializer_context(self):
        return { 'user': self.request.user }

class InsluineDozeDetail(APIView):

    def get_object(self, id: int) -> Doze:
        try:
            return Doze.objects.get(Id=id)
        except Doze.DoesNotExist:
            raise Http404

    def get(self, request: HttpRequest, id: int, format=None) -> JsonResponse:
        doze = self.get_object(id)
        if doze.user != request.user:
            return JsonResponse("Unauthorized", status=status.HTTP_401_UNAUTHORIZED, safe=False)
        doze_serializer = DozeSerializer(doze)
        return JsonResponse(doze_serializer.data, safe=False)

    def put(self, request: HttpRequest, format=None) -> JsonResponse:
        doze_data = JSONParser().parse(request)
        doze = self.get_object(doze_data['Id'])
        doze_serializer = DozeSerializer(doze, data=doze_data)
        if doze_serializer.is_valid():
            doze_serializer.save()
            return JsonResponse('Updated Successfully.', safe=False)
        return JsonResponse(doze_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request: HttpRequest, id: int, format=None) -> JsonResponse:
        doze = self.get_object(id)
        doze.delete()
        return JsonResponse('Deleted Successfully.', safe=False, status=status.HTTP_204_NO_CONTENT)
