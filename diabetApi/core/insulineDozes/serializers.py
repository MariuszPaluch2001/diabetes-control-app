from rest_framework import serializers
from .models import Doze


class DozeSerializer(serializers.ModelSerializer):
    typeName = serializers.CharField(
        source='get_type_display',
        read_only=True
    )

    class Meta:
        model = Doze
        fields = ('Id', 'units', 'timestamp',
                  'description', 'type', 'typeName')
