from django.urls import path

from . import views

urlpatterns = [
    path("", views.InslulineDozesList.as_view()),
    path("<int:id>", views.InsluineDozeDetail.as_view())
]
