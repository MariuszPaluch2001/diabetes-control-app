from rest_framework import serializers
from .models import Doze


class DozeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doze
        fields = ('Id', 'units', 'timestamp', 'description', 'type')
