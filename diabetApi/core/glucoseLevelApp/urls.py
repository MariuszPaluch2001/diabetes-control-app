from django.urls import path

from . import views

urlpatterns = [
    path("", views.GlucosesList.as_view()),
    path("<int:id>", views.GlucoseDetail.as_view()),
    path("unit-choices", views.GlucoseTypes.as_view()),
]
