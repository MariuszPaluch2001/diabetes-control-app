from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse


# Create your views here.
@csrf_exempt
def dozesApi(request, id: int = 0):
    if request.method == 'GET':
        return JsonResponse("test" + str(id), safe=False)
