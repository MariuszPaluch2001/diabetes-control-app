from rest_framework import serializers

from .models import GlucoseLevel


class GlucoseLevelSerializer(serializers.ModelSerializer):
    unitName = serializers.CharField(source='get_unit_display', read_only=True)
    
    def create(self, validated_data):
      user = self.context['user']
      glucoseSample = GlucoseLevel.objects.create(
         user=user, 
         **validated_data
      )
      return glucoseSample

    class Meta:
        model = GlucoseLevel
        fields = ('Id', 'value', 'timestamp', 'unit', 'unitName')