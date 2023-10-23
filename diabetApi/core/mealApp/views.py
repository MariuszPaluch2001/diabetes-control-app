from django.http import Http404, HttpRequest
from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView

from .models import Dish, Meal
from .serializers import DishSerializer, MealSerializer

# Create your views here.

class DishUnits(APIView):

    def get(request: HttpRequest, id: int = 0) -> JsonResponse:
        unit_choices = [{'value': value, 'label': label} for value, label in Dish.UnitName.choices]
        return JsonResponse(unit_choices, safe=False)


class DishesList(APIView):

    def get(self, request: HttpRequest, format=None) -> JsonResponse:
        meal = Dish.objects.filter(user=request.user)
        meal_serializer = DishSerializer(meal, many=True)
        return JsonResponse(meal_serializer.data, safe=False)

    def post(self, request: HttpRequest, format=None) -> JsonResponse:
        dish_data = JSONParser().parse(request)
        dish_serializer = DishSerializer(data=dish_data, context=self.get_serializer_context())
        if dish_serializer.is_valid():
            dish_serializer.save()
            return JsonResponse('Save Successfully.', safe=False)
        return JsonResponse(dish_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_serializer_context(self):
        return { 'user': self.request.user }
    
class DishDetail(APIView):

    def get_object(self, id: int) -> Dish:
        try:
            return Dish.objects.get(Id=id)
        except Dish.DoesNotExist:
            raise Http404

    def get(self, request: HttpRequest, id: int, format=None) -> JsonResponse:
        dish = self.get_object(id)
        if dish.user != request.user:
            return JsonResponse("Unauthorized", status=status.HTTP_401_UNAUTHORIZED, safe=False)
        dish_serializer = DishSerializer(dish)
        return JsonResponse(dish_serializer.data, safe=False)

    def put(self, request: HttpRequest, format=None) -> JsonResponse:
        dish_data = JSONParser().parse(request)
        dish = self.get_object(dish_data['Id'])
        dish_serializer = DishSerializer(dish, data=dish_data)
        if dish_serializer.is_valid():
            dish_serializer.save()
            return JsonResponse('Updated Successfully.', safe=False)
        return JsonResponse(dish_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request: HttpRequest, id: int, format=None) -> JsonResponse:
        dish = self.get_object(id)
        dish.delete()
        return JsonResponse('Deleted Successfully.', safe=False, status=status.HTTP_204_NO_CONTENT)

class MealsList(APIView):

    def get(self, request: HttpRequest, format=None) -> JsonResponse:
        meal = Meal.objects.filter(dish__user=request.user)
        meal_serializer = MealSerializer(meal, many=True)
        return JsonResponse(meal_serializer.data, safe=False)

    def post(self, request: HttpRequest, format=None) -> JsonResponse:
        meal_data = JSONParser().parse(request)
        meal_serializer = MealSerializer(data=meal_data)
        related_dish = Dish.objects.get(Id = meal_data['dish'])
        if related_dish.user != request.user:
            return JsonResponse("Unauthorized", status=status.HTTP_401_UNAUTHORIZED, safe=False)
        if meal_serializer.is_valid():
            meal_serializer.save()
            return JsonResponse('Save Successfully.', safe=False)
        return JsonResponse(meal_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MealDetail(APIView):

    def get_object(self, id: int) -> Meal:
        try:
            return Meal.objects.get(Id=id)
        except Meal.DoesNotExist:
            raise Http404

    def get(self, request: HttpRequest, id: int, format=None) -> JsonResponse:
        meal = self.get_object(id)
        related_dish = Dish.objects.get(Id = meal.dish.Id)
        if related_dish.user != request.user:
            return JsonResponse("Unauthorized", status=status.HTTP_401_UNAUTHORIZED, safe=False)
        meal_serializer = MealSerializer(meal)
        return JsonResponse(meal_serializer.data, safe=False)

    def put(self, request: HttpRequest, format=None) -> JsonResponse:
        meal_data = JSONParser().parse(request)
        meal = self.get_object(meal_data['Id'])
        meal_serializer = MealSerializer(meal, data=meal_data)
        if meal_serializer.is_valid():
            meal_serializer.save()
            return JsonResponse('Updated Successfully.', safe=False)
        return JsonResponse(meal_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request: HttpRequest, id: int, format=None) -> JsonResponse:
        meal = self.get_object(id)
        meal.delete()
        return JsonResponse('Deleted Successfully.', safe=False, status=status.HTTP_204_NO_CONTENT)


