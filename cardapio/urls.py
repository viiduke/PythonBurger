# URLs específicas do Python Burger
from django.urls import path
from . import views

urlpatterns = [
    # Página inicial do Python Burger
    path('', views.home, name='home'),
    
    # Página do cardápio completo
    path('cardapio/', views.cardapio, name='cardapio'),
    
    # Página sobre o restaurante
    path('sobre/', views.sobre, name='sobre'),
    
    # Página de contato
    path('contato/', views.contato, name='contato'),

    #URLs dinâmicas
    path('hamburguer/<int:id>/', views.hamburguer_detalhe, name='hamburguer'),

    path('categoria/<str:tipo>/', views.categoria, name='categoria'),



]