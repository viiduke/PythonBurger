from django.shortcuts import render
from django.http import HttpResponse

# View da página inicial do Python Burger
def home(request):
    # João passa informações importantes para o salão
    contexto = {
        'atendente': 'João',
        'restaurante': 'Python Burger',
        'especialidade': 'programação',
        'aberto': True,
        
        # Lista dos hambúrguers do dia
        'destaques': [
            'Python Classic',
            'Django Master',
            'Flask Minimal',
        ],
        # Nova variável que pode estar vazia
        'promocao_hoje': '',  # String vazia para testar
    }
    
    return render(request, 'cardapio/home.html', contexto)

# View da página do cardápio
def cardapio(request):
    # Maria, especialista em hambúrguers, apresenta o cardápio
    contexto = {
        'atendente': 'Maria',
        'restaurante': 'Python Burger',
        
        # Lista dos hambúrguers com informações organizadas
        'hamburguers': [
            {
                'nome': 'Python Classic',
                'preco': '25,00',
                'descricao': 'Hambúrguer simples e elegante, como o código Python!'
            },
            {
                'nome': 'Django Master', 
                'preco': '35,00',
                'descricao': 'Com todos os ingredientes inclusos, framework completo!'
            },
            {
                'nome': 'Flask Minimal',
                'preco': '20,00', 
                'descricao': 'Minimalista mas poderoso, você adiciona o que quiser!'
            }
        ]
    }
    
    return render(request, 'cardapio/cardapio.html', contexto)


# View da página sobre
def sobre(request):
    # Carlos, o contador de histórias, fala sobre o restaurante
    contexto = {
        'atendente': 'Carlos'
    }
    
    return render(request, 'cardapio/sobre.html', contexto)

# View da página de contato
def contato(request):
    # Ana, responsável pelo atendimento, passa as informações
    contexto = {
        'atendente': 'Ana'
    }
    
    return render(request, 'cardapio/contato.html', contexto)

def hamburguer_detalhe(request, id):
    hamburguer_info = {
        1: "Python Classic",
        2: "Django Deluxe",
        3: "Flask Burguer"
    }
    if id in hamburguer_info:
        return HttpResponse(hamburguer_info[id])
    else:
        return HttpResponse(f"Hamburguer {id} não encontrado!")
    
def categoria(request, tipo):
    categorias = {
        'tradicional':"Hamburgueres Tradicionais",
        'premium': "Hamburgueres Premium",
        'vegano': "Opções Veganas"
    }

    if tipo in categorias:
        return HttpResponse(categorias[tipo])
    else:
        return HttpResponse(f"Categoria '{tipo}' não existe!")