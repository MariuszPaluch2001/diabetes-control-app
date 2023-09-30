from django.http import HttpRequest
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from .models import GlucoseLevel
from .serializers import GlucoseLevelSerializer

# Create your views here.


@csrf_exempt
def glucosesApi(request: HttpRequest, id: int = 0) -> JsonResponse:
    if request.method == 'GET' and id == 0:
        glucose_levels = GlucoseLevel.objects.all()
        glucose_serializer = GlucoseLevelSerializer(glucose_levels, many=True)
        return JsonResponse(glucose_serializer.data, safe=False)

    elif request.method == 'GET':
        glucose_level = GlucoseLevel.objects.get(Id=id)
        glucose_serializer = GlucoseLevelSerializer(glucose_level)
        return JsonResponse(glucose_serializer.data, safe=False)

    elif request.method == 'POST':
        glucose_level_data = JSONParser().parse(request)
        glucose_serializer = GlucoseLevelSerializer(data=glucose_level_data)
        if glucose_serializer.is_valid():
            glucose_serializer.save()
            return JsonResponse("Added Successfuly.", safe=False)
        return JsonResponse("Failed To Add.", safe=False)

    elif request.method == 'PUT':
        glucose_level_data = JSONParser().parse(request)
        glucose_level = GlucoseLevel.objects.get(Id=glucose_level_data["Id"])
        glucose_serializer = GlucoseLevelSerializer(glucose_level, data=glucose_level_data)
        if glucose_serializer.is_valid():
            glucose_serializer.save()
            return JsonResponse("Updated Successfully.", safe=False)
        return JsonResponse("Failed To Update.", safe=False)

    elif request.method == 'DELETE':
        glucose = GlucoseLevel.objects.get(Id=id)
        glucose.delete()
        return JsonResponse("Deleted Successfully.", safe=False)

@csrf_exempt
def glucosesTypesApi(request: HttpRequest, id: int = 0) -> JsonResponse:

    if request.method == 'GET':
        unit_choices = [{'value': value, 'label': label} for value, label in GlucoseLevel.Unit.choices]
        return JsonResponse(unit_choices, safe=False)
    