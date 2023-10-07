from django.db import models


class Dish(models.Model):
    Id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, default='')
    glycemic_index = models.IntegerField(null=False, blank=False)
    carbohydrate_exchange = models.IntegerField(null=False, blank=False)

    class UnitName(models.TextChoices):
        GRAMS = '1', 'GRAMS'
        UNITS = '2', 'UNITS'

    unit = models.CharField(max_length=2, choices=UnitName.choices, default=UnitName.GRAMS)
    description = models.CharField(max_length=300, blank=True, default='')

    def get_unit(self, obj):
        return obj.get_unit_display()


class Meal(models.Model):
    Id = models.AutoField(primary_key=True)
    timestamp = models.DateTimeField(null=False, blank=False, unique=True)
    dish = models.ForeignKey(
        Dish,
        on_delete=models.CASCADE,
    )
    quantity = models.IntegerField(null=False, blank=False)
    description = models.CharField(max_length=300, blank=True, default='')
