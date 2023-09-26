from django.urls import path

from . import views

urlpatterns = [
    path("meal/", views.mealApi),
    path("meal/<int:id>", views.mealApi),
    path("dishes/", views.dishApi),
    path("dishes/<int:id>", views.dishApi)
]
