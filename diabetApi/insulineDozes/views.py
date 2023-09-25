from django.http import HttpRequest, HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from .models import Doze
from .serializers import DozeSerializer

# Create your views here.


@csrf_exempt
def dozesApi(request: HttpRequest, id: int = 0) -> JsonResponse:
    if request.method == 'GET' and id == 0:
        dozes = Doze.objects.all()
        dozes_serializer = DozeSerializer(dozes, many=True)
        return JsonResponse(dozes_serializer.data, safe=False)

    elif request.method == 'GET':
        doze = Doze.objects.get(Id=id)
        dozes_serializer = DozeSerializer(doze)
        return JsonResponse(dozes_serializer.data, safe=False)

    elif request.method == 'POST':
        doze_data = JSONParser().parse(request)
        dozes_serializer = DozeSerializer(data=doze_data)
        if dozes_serializer.is_valid():
            dozes_serializer.save()
            return JsonResponse("Added Successfuly.", safe=False)
        return JsonResponse("Failed To Add.", safe=False)

    elif request.method == 'PUT':
        doze_data = JSONParser().parse(request)
        doze = Doze.objects.get(Id=doze_data["Id"])
        doze_serializer = DozeSerializer(doze, data=doze_data)
        if doze_serializer.is_valid():
            doze_serializer.save()
            return JsonResponse("Updated Successfully.", safe=False)
        return JsonResponse("Failed To Update.", safe=False)

    elif request.method == 'DELETE':
        doze = Doze.objects.get(Id=id)
        doze.delete()
        return JsonResponse("Deleted Successfully.", safe=False)
