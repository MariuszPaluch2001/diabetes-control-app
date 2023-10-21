from django.conf import settings
from django.db import models


class Doze(models.Model):
    Id = models.AutoField(primary_key=True)
    units = models.IntegerField(null=False, blank=False)
    timestamp = models.DateTimeField(null=False, blank=False, unique=True)
    description = models.CharField(max_length=300, blank=True, default='')
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    
    class InsulineType(models.TextChoices):
        RAPID = '1', 'RAPID-ACTING'
        LONG = '2', 'LONG-RUNNING'

    # TODO: zmienić na backendzie i frontendzie nazwę type!
    type = models.CharField(max_length=2, choices=InsulineType.choices, default=InsulineType.RAPID)  # noqa: A003
