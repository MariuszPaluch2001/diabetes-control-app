from django.urls import path

from . import views

urlpatterns = [
    path('register', views.Register.as_view()),
    path('login', views.Login.as_view()),
    path('logout', views.Logout.as_view()),
    path('test_token', views.Test_Token.as_view()),
]
