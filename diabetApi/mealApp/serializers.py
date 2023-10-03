from rest_framework import serializers
from .models import Dish, Meal


class DishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = ('Id', 'name', 'glycemic_index',
                  'carbohydrate_exchange', 'unit', 'description')


class MealSerializer(serializers.ModelSerializer):
    dish_name = serializers.CharField(source='dish.name', read_only=True)
    class Meta:
        model = Meal
        fields = ('Id', 'timestamp', 'quantity',
                  'description', 'dish', 'dish_name')