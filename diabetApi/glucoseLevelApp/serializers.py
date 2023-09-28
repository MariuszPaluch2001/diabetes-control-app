from rest_framework import serializers
from .models import GlucoseLevel


class GlucoseLevelSerializer(serializers.ModelSerializer):
    unit = serializers.CharField(
        source='get_unit_display'
    )
    class Meta:
        model = GlucoseLevel
        fields = ('Id', 'value', 'timestamp', 'unit')
