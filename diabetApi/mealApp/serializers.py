from rest_framework import serializers
from .models import Dish, Meal


class DishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = ('Id', 'name', 'glycemic_index',
                  'carbohydrate_exchange', 'unit', 'description')


class MealSerializer(serializers.ModelSerializer):
    dish_name = serializers.CharField(source='dish.name', read_only=True)
    unit = serializers.CharField(
        source='dish.get_unit_display', read_only=True)
    glycemic_index = serializers.CharField(source='dish.glycemic_index', read_only=True)
    carbohydrate_exchange = serializers.CharField(source='dish.carbohydrate_exchange', read_only=True)
    
    class Meta:
        model = Meal
        fields = ('Id', 'timestamp', 'dish_name',
                  'unit', 'quantity', 'description', 'glycemic_index', 'carbohydrate_exchange')
