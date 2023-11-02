from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *

# Create your views here.
class PacienteView(viewsets.ModelViewSet):
    serializer_class = PacienteSerializer
    queryset = Paciente.objects.all()

class MedicoView(viewsets.ModelViewSet):
    serializer_class = MedicoSerializer
    queryset = Medico.objects.all()

class CitaView(viewsets.ModelViewSet):
    serializer_class = CitaSerializer
    queryset = Cita.objects.all()
