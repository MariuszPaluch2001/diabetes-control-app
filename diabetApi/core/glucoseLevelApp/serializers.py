from rest_framework import serializers
from .models import GlucoseLevel


class GlucoseLevelSerializer(serializers.ModelSerializer):
    unitName = serializers.CharField(
        source='get_unit_display',
        read_only = True
    )
    
    class Meta:
        model = GlucoseLevel
        fields = ('Id', 'value', 'timestamp', 'unit', 'unitName')
