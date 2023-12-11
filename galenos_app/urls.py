from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from galenos_app import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# API Versioning
router = routers.DefaultRouter()
router.register(r'Pacientes', views.PacienteView, 'Pacientes')
router.register(r'Medicos', views.MedicoView, 'Medicos')
router.register(r'Citas', views.CitaView, 'Citas')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title="Galenos API")),
]
