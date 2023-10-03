from django.http import Http404, HttpRequest
from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView

from .models import Dish, Meal
from .serializers import DishSerializer, MealSerializer

# Create your views here.


class MealsList(APIView):
    def get(self, request: HttpRequest, format=None) -> JsonResponse:
        meal = Meal.objects.all()
        meal_serializer = MealSerializer(meal, many=True)
        return JsonResponse(meal_serializer.data, safe=False)

    def post(self, request: HttpRequest, format=None) -> JsonResponse:
        meal_data = JSONParser().parse(request)
        meal_serializer = MealSerializer(data=meal_data)
        if meal_serializer.is_valid():
            meal_serializer.save()
            return JsonResponse("Save Successfully.", safe=False)
        return JsonResponse(meal_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class MealDetail(APIView):

    def get_object(self, id: int) -> Meal:
        try:
            return Meal.objects.get(Id=id)
        except Meal.DoesNotExist:
            raise Http404

    def get(self, request: HttpRequest, id: int, format=None) -> JsonResponse:
        meal = self.get_object(id)
        meal_serializer = MealSerializer(meal)
        return JsonResponse(meal_serializer.data, safe=False)

    def put(self, request: HttpRequest, format=None) -> JsonResponse:
        meal_data = JSONParser().parse(request)
        meal = self.get_object(meal_data["Id"])
        meal_serializer = MealSerializer(
            meal, data=meal_data)
        if meal_serializer.is_valid():
            meal_serializer.save()
            return JsonResponse("Updated Successfully.", safe=False)
        return JsonResponse(meal_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request: HttpRequest, format=None) -> JsonResponse:
        meal = self.get_object(id)
        meal.delete()
        return JsonResponse("Deleted Successfully.", safe=False, status=status.HTTP_204_NO_CONTENT)


class DishesList(APIView):
    def get(self, request: HttpRequest, format=None) -> JsonResponse:
        meal = Dish.objects.all()
        meal_serializer = DishSerializer(meal, many=True)
        return JsonResponse(meal_serializer.data, safe=False)


class DishDetail(APIView):

    def get_object(self, id: int) -> Dish:
        try:
            return Dish.objects.get(Id=id)
        except Dish.DoesNotExist:
            raise Http404

    def get(self, request: HttpRequest, id: int, format=None) -> JsonResponse:
        dish = self.get_object(id)
        dish_serializer = MealSerializer(dish)
        return JsonResponse(dish_serializer.data, safe=False)

    def put(self, request: HttpRequest, format=None) -> JsonResponse:
        dish_data = JSONParser().parse(request)
        dish = self.get_object(dish_data["Id"])
        dish_serializer = MealSerializer(
            dish, data=dish_data)
        if dish_serializer.is_valid():
            dish_serializer.save()
            return JsonResponse("Updated Successfully.", safe=False)
        return JsonResponse(dish_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request: HttpRequest, format=None) -> JsonResponse:
        dish = self.get_object(id)
        dish.delete()
        return JsonResponse("Deleted Successfully.", safe=False, status=status.HTTP_204_NO_CONTENT)
