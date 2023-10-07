from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("dozes/", include("core.insulineDozes.urls")),
    path("glucoseLevels/", include("core.glucoseLevelApp.urls")),
    path("mealApp/", include("core.mealApp.urls")),
]
