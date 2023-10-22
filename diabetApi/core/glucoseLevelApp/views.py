from django.http import Http404, HttpRequest
from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView

from .models import GlucoseLevel
from .serializers import GlucoseLevelSerializer


class GlucoseTypes(APIView):

    def get(request: HttpRequest, id: int = 0) -> JsonResponse:
        unit_choices = [{'value': value, 'label': label} for value, label in GlucoseLevel.Unit.choices]
        return JsonResponse(unit_choices, safe=False)


class GlucosesList(APIView):
    def get(self, request: HttpRequest, format=None) -> JsonResponse:
        glucose_levels = GlucoseLevel.objects.filter(user=request.user)
        glucose_serializer = GlucoseLevelSerializer(glucose_levels, many=True)
        return JsonResponse(glucose_serializer.data, safe=False)

    def post(self, request: HttpRequest, format=None) -> JsonResponse:
        glucose_level_data = JSONParser().parse(request)
        glucose_serializer = GlucoseLevelSerializer(data=glucose_level_data, context=self.get_serializer_context())
        if glucose_serializer.is_valid():
            glucose_serializer.save()
            return JsonResponse('Save Successfully.', safe=False, status=status.HTTP_200_OK)
        return JsonResponse(glucose_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_serializer_context(self):
        return { 'user': self.request.user }


class GlucoseDetail(APIView):

    def get_object(self, id: int) -> GlucoseLevel:
        try:
            return GlucoseLevel.objects.get(Id=id)
        except GlucoseLevel.DoesNotExist:
            raise Http404

    def get(self, request: HttpRequest, id: int, format=None) -> JsonResponse:
        glucose_level = self.get_object(id)
        if glucose_level.user != request.user:
            return JsonResponse("Unauthorized", status=status.HTTP_401_UNAUTHORIZED, safe=False)
        glucose_serializer = GlucoseLevelSerializer(glucose_level)
        return JsonResponse(glucose_serializer.data, safe=False)

    def put(self, request: HttpRequest, format=None) -> JsonResponse:
        glucose_level_data = JSONParser().parse(request)
        glucose_level = self.get_object(glucose_level_data['Id'])
        glucose_serializer = GlucoseLevelSerializer(glucose_level, data=glucose_level_data)
        if glucose_serializer.is_valid():
            glucose_serializer.save()
            return JsonResponse('Updated Successfully.', safe=False)
        return JsonResponse(glucose_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request: HttpRequest, id: int, format=None) -> JsonResponse:
        glucose_level = self.get_object(id)
        glucose_level.delete()
        return JsonResponse('Deleted Successfully.', safe=False, status=status.HTTP_204_NO_CONTENT)
