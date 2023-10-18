import logging

from django.contrib import admin
from django.urls import include, path

logger = logging.getLogger(__name__)
logger.debug('This is a debug message')
logger.info('This is an info message')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('dozes/', include('core.insulineDozes.urls')),
    path('glucoseLevels/', include('core.glucoseLevelApp.urls')),
    path('mealApp/', include('core.mealApp.urls')),
    path('auth/', include('core.auth.urls')),
]
