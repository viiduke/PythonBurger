# URLs principais do Python Burger (Shopping)
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # Área administrativa do Django
    path('admin/', admin.site.urls),
    
    # Todas as URLs do cardápio (direciona para o restaurante)
    path('', include('cardapio.urls')),
]