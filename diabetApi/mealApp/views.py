from django.http import HttpRequest, HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from .models import Dish, Meal
from .serializers import DishSerializer, MealSerializer

# Create your views here.


@csrf_exempt
def mealApi(request: HttpRequest, id: int = 0) -> JsonResponse:
    if request.method == 'GET' and id == 0:
        meals = Meal.objects.all()
        meals_serializer = MealSerializer(meals, many=True)
        return JsonResponse(meals_serializer.data, safe=False)

    elif request.method == 'GET':
        meal = Meal.objects.get(Id=id)
        meals_serializer = MealSerializer(meal)
        return JsonResponse(meals_serializer.data, safe=False)

    elif request.method == 'POST':
        meal_data = JSONParser().parse(request)
        meals_serializer = MealSerializer(data=meal_data)
        if meals_serializer.is_valid():
            meals_serializer.save()
            return JsonResponse("Added Successfuly.", safe=False)
        return JsonResponse("Failed To Add.", safe=False)

    elif request.method == 'PUT':
        meal_data = JSONParser().parse(request)
        meal = Meal.objects.get(Id=meal_data["Id"])
        meal_serializer = MealSerializer(meal, data=meal_data)
        if meal_serializer.is_valid():
            meal_serializer.save()
            return JsonResponse("Updated Successfully.", safe=False)
        return JsonResponse("Failed To Update.", safe=False)

    elif request.method == 'DELETE':
        meal = Meal.objects.get(Id=id)
        meal.delete()
        return JsonResponse("Deleted Successfully.", safe=False)

@csrf_exempt
def dishApi(request: HttpRequest, id: int = 0) -> JsonResponse:
    if request.method == 'GET' and id == 0:
        dishes = Dish.objects.all()
        dishes_serializer = DishSerializer(dishes, many=True)
        return JsonResponse(dishes_serializer.data, safe=False)

    elif request.method == 'GET':
        dish = Dish.objects.get(Id=id)
        dishes_serializer = DishSerializer(dish)
        return JsonResponse(dishes_serializer.data, safe=False)

    elif request.method == 'POST':
        dish_data = JSONParser().parse(request)
        dishes_serializer = DishSerializer(data=dish_data)
        if dishes_serializer.is_valid():
            dishes_serializer.save()
            return JsonResponse("Added Successfuly.", safe=False)
        return JsonResponse("Failed To Add.", safe=False)

    elif request.method == 'PUT':
        dish_data = JSONParser().parse(request)
        dish = Dish.objects.get(Id=dish_data["Id"])
        dish_serializer = DishSerializer(dish, data=dish_data)
        if dish_serializer.is_valid():
            dish_serializer.save()
            return JsonResponse("Updated Successfully.", safe=False)
        return JsonResponse("Failed To Update.", safe=False)

    elif request.method == 'DELETE':
        dish = Dish.objects.get(Id=id)
        dish.delete()
        return JsonResponse("Deleted Successfully.", safe=False)