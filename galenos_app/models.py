from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Paciente(models.Model):
    id_paciente = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    rut = models.CharField(max_length=12, verbose_name='RUT')
    fecha_nacimiento = models.DateField()
    edad = models.IntegerField()
    MASCULINO = 'Masculino'
    FEMENINO = 'Femenino'
    GENERO_CHOICES = [
        (MASCULINO, 'Masculino'),
        (FEMENINO, 'Femenino'),
    ]
    genero = models.CharField(max_length=10, choices=GENERO_CHOICES)
    sistema_salud = models.CharField(max_length=100)
    telefono = models.IntegerField()
    email = models.EmailField(max_length=100, unique=True)
    direccion = models.CharField(max_length=100)
    medicacion = models.CharField(max_length=100, null=True)
    medico = models.ForeignKey('Medico', on_delete=models.CASCADE, blank=True, null=True, related_name='pacientes_asignados')

    def __str__(self):
        return self.nombre
    
class Medico(models.Model):
    id_medico = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    rut = models.CharField(max_length=12, verbose_name='RUT')
    fecha_nacimiento = models.DateField()
    edad = models.IntegerField()
    MASCULINO = 'Masculino'
    FEMENINO = 'Femenino'
    GENERO_CHOICES = [
        (MASCULINO, 'Masculino'),
        (FEMENINO, 'Femenino'),
    ]
    genero = models.CharField(max_length=10, choices=GENERO_CHOICES)
    telefono = models.CharField(max_length=20)
    email = models.EmailField(max_length=100, unique=True)
    direccion = models.CharField(max_length=100)
    matricula = models.CharField(max_length=20)
    especialidad = models.CharField(max_length=50)
    pacientes = models.ManyToManyField(Paciente, through='Cita', related_name='citas_medico')

    def __str__(self):
        return self.nombre
    

class Cita(models.Model):
    id_cita = models.AutoField(primary_key=True)
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    medico = models.ForeignKey(Medico, on_delete=models.CASCADE)
    fecha = models.DateField()
    hora = models.TimeField()
    motivo = models.TextField()
    diagnostico = models.TextField()
    receta = models.TextField()

    def __str__(self):
        return f"{self.paciente} cita con {self.medico} el {self.fecha} a las {self.hora}"
    

class CustomUser(AbstractUser):
    rut = models.CharField(max_length=12, unique=True, verbose_name='RUT')
    es_paciente = models.BooleanField(default=False)
    es_medico = models.BooleanField(default=False)
    es_secretaria = models.BooleanField(default=False)