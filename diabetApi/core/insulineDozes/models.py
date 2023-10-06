from django.db import models

# Create your models here.

# Create your models here.

    
class Doze(models.Model):
    Id = models.AutoField(primary_key=True)
    units = models.IntegerField(null=False, blank=False)
    timestamp = models.DateTimeField(null=False, blank=False, unique=True)
    description = models.CharField(max_length=300, blank=True, default='')
    class InsulineType(models.TextChoices):
        RAPID = "1", "RAPID-ACTING"
        LONG = "2", "LONG-RUNNING"

    type = models.CharField(
        max_length=2,
        choices=InsulineType.choices,
        default=InsulineType.RAPID
    )