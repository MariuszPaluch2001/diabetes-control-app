from django.db import models

# Create your models here.

# Create your models here.

    
class Doze(models.Model):
    Id = models.AutoField(primary_key=True)
    units = models.IntegerField()
    timestamp = models.DateTimeField()
    description = models.CharField(max_length=300)