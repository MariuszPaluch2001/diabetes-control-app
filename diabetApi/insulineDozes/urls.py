from django.urls import path

from . import views

urlpatterns = [
    path("", views.dozesApi),
    path("<int:id>", views.dozesApi)
]