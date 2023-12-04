from rest_framework import serializers
from .models import Paciente, Medico, Cita
from django.contrib.auth import get_user_model

class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = '__all__'

class MedicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medico
        fields = '__all__'

class CitaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cita
        fields = '__all__'


User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'rut', 'es_paciente', 'es_medico', 'es_secretaria', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            rut=validated_data['rut'],
            password=validated_data['password']
        )
        # Aquí puedes añadir lógica para asignar roles basados en el RUT o algún otro criterio
        return user