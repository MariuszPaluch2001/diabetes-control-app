from django.db import models

class GlucoseLevel(models.Model):
    Id = models.AutoField(primary_key=True)
    value = models.IntegerField(null=False, blank=False)
    timestamp = models.DateTimeField(null=False, blank=False, unique=True)

    class Unit(models.TextChoices):
        MGDL = "1", "mg/dL"
        LONG = "2", "mmol/l"

    unit = models.CharField(
        max_length=2,
        choices=Unit.choices,
        default=Unit.MGDL
    )

