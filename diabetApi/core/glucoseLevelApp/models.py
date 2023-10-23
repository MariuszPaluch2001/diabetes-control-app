from django.conf import settings
from django.db import models


class GlucoseLevel(models.Model):
    Id = models.AutoField(primary_key=True)
    value = models.IntegerField(null=False, blank=False)
    timestamp = models.DateTimeField(null=False, blank=False, unique=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )

    class Unit(models.TextChoices):
        MGDL = '1', 'mg/dL'
        LONG = '2', 'mmol/l'

    unit = models.CharField(max_length=2, choices=Unit.choices, default=Unit.MGDL)
