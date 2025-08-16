from django.shortcuts import render
from django.http import HttpResponse

# View da página inicial do Python Burger
def home(request):
    # João, o atendente da entrada, dá as boas-vindas
    mensagem = """
    <h1>🍔 Bem-vindos ao Python Burger! 🍔</h1>
    <h2>O melhor hambúrguer da linguagem Python!</h2>
    <p>Olá! Eu sou o João, atendente da entrada.</p>
    <p>Aqui você encontra os hambúrguers mais deliciosos do mundo da programação!</p>
    <ul>
        <li><a href='/cardapio/'>🍔 Ver Cardápio</a></li>
        <li><a href='/sobre/'>📖 Nossa História</a></li>
        <li><a href='/contato/'>📞 Contato</a></li>
    </ul>
    """
    return HttpResponse(mensagem)

# View da página do cardápio
def cardapio(request):
    # Maria, especialista em hambúrguers, apresenta o cardápio
    cardapio_html = """
    <h1>🍔 Cardápio do Python Burger 🍔</h1>
    <h2>Oi! Eu sou a Maria, sua especialista em hambúrguers!</h2>
    <p>Aqui estão nossos hambúrguers temáticos de programação:</p>
    
    <h3>🐍 Linha Python:</h3>
    <ul>
        <li><strong>Python Classic</strong> - R$ 25,00<br>
            Hambúrguer simples e elegante, como o código Python!</li>
        <li><strong>Django Master</strong> - R$ 35,00<br>
            Com todos os ingredientes inclusos, framework completo!</li>
        <li><strong>Flask Minimal</strong> - R$ 20,00<br>
            Minimalista mas poderoso, você adiciona o que quiser!</li>
    </ul>
    
    <p><a href='/'>🏠 Voltar ao Início</a></p>
    """
    return HttpResponse(cardapio_html)

# View da página sobre
def sobre(request):
    # Carlos, o contador de histórias, fala sobre o restaurante
    historia = """
    <h1>📖 Nossa História</h1>
    <h2>Olá! Eu sou o Carlos, guardião da história do Python Burger!</h2>
    
    <p>O Python Burger nasceu em 2024, quando um grupo de programadores Python 
    percebeu que precisava de um lugar especial para comer enquanto codam!</p>
    
    <p>Nossa missão é simples: criar hambúrguers tão elegantes e saborosos 
    quanto o código Python - simples na aparência, mas poderosos no resultado!</p>
    
    <h3>🏆 Nossos Valores:</h3>
    <ul>
        <li><strong>Simplicidade:</strong> Como Python, priorizamos o que funciona</li>
        <li><strong>Qualidade:</strong> Cada hambúrguer é testado e aprovado</li>
        <li><strong>Comunidade:</strong> Lugar de encontro para pythonistas</li>
    </ul>
    
    <p><a href='/'>🏠 Voltar ao Início</a></p>
    """
    return HttpResponse(historia)

# View da página de contato
def contato(request):
    # Ana, responsável pelo atendimento, passa as informações
    info_contato = """
    <h1>📞 Fale Conosco</h1>
    <h2>Oi! Eu sou a Ana, responsável pelo atendimento!</h2>
    
    <p>Precisa falar conosco? Aqui estão nossas informações:</p>
    
    <h3>📍 Endereço:</h3>
    <p>Rua dos Pythonistas, 3776<br>
    Bairro Framework - São Paulo/SP<br>
    CEP: 01234-567</p>
    
    <h3>📱 Telefones:</h3>
    <ul>
        <li><strong>Pedidos:</strong> (11) 3776-2024</li>
        <li><strong>WhatsApp:</strong> (11) 9-9999-9999</li>
    </ul>
    
    <h3>🕒 Horário de Funcionamento:</h3>
    <p>Segunda a Sexta: 11h às 22h<br>
    Sábado e Domingo: 12h às 20h</p>
    
    <p><a href='/'>🏠 Voltar ao Início</a></p>
    """
    return HttpResponse(info_contato)

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