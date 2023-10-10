from django.urls import path

from . import views

urlpatterns = [
    path('meal/', views.MealsList.as_view()),
    path('meal/<int:id>', views.MealDetail.as_view()),
    path('dishes/', views.DishesList.as_view()),
    path('dishes/<int:id>', views.DishDetail.as_view()),
    path('dishes/unit-names/', views.DishUnits.as_view()),
]
