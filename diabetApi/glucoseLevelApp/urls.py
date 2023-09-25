from django.urls import path

from . import views

urlpatterns = [
    path("", views.glucosesApi),
    path("<int:id>", views.glucosesApi)
]