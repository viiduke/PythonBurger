# 🍔 Python Burger

**Uma aplicação web completa para gerenciamento de restaurante construída com Django**

O Python Burger é um sistema de restaurante temático desenvolvido para programadores Python, oferecendo uma solução completa para gerenciamento de cardápio, pedidos e operações de um restaurante especializado em hambúrguers com nomes inspirados em tecnologias Python.

## 🚀 Funcionalidades

### 🏠 Páginas Principais
- **Home**: Página inicial de boas-vindas ao Python Burger
- **Cardápio**: Exibição completa dos hambúrguers temáticos com preços
- **Sobre**: História e valores do restaurante Python Burger
- **Contato**: Informações de contato e atendimento

### 🍔 Sistema de Cardápio
- **Linha Python**: Hambúrguers inspirados no ecossistema Python
  - **Python Classic** - R$ 25,00 - Hambúrguer simples e elegante
  - **Django Master** - R$ 35,00 - Framework completo com todos os ingredientes
  - **Flask Minimal** - R$ 20,00 - Minimalista mas poderoso

### 🔗 URLs Dinâmicas
- Páginas específicas de hambúrguers (`/hamburguer/<id>/`)
- Categorização por tipo (`/categoria/<tipo>/`)
- Sistema de navegação intuitivo com nomes amigáveis

### 👥 Equipe Virtual
O sistema simula uma equipe de atendimento especializada:
- **João**: Especialista em recepção (Home)
- **Maria**: Expert em cardápio (Menu)
- **Carlos**: Contador de histórias (Sobre)
- **Ana**: Responsável pelo atendimento (Contato)

## 🛠️ Tecnologias Utilizadas

### Backend
- **Python 3.8+**
- **Django 5.0+** - Framework web principal
- **SQLite** - Banco de dados (desenvolvimento)

### Arquitetura
- **MVT (Model-View-Template)** - Padrão arquitetural do Django
- **Function-based Views** - Views funcionais para processamento de requisições
- **URL Patterns** - Sistema de roteamento com parâmetros dinâmicos

### Frontend
- **HTML5** - Estrutura das páginas
- **CSS3** - Estilização responsiva
- **JavaScript** - Interatividade básica

## 📁 Estrutura do Projeto

```
python_burger/
├── manage.py                    # Utilitário de linha de comando do Django
├── python_burger/              # Diretório principal do projeto
│   ├── __init__.py
│   ├── settings.py             # Configurações do Django
│   ├── urls.py                 # URLs principais do projeto
│   ├── wsgi.py                 # Interface WSGI
│   └── asgi.py                 # Interface ASGI
└── cardapio/                   # Aplicativo principal
    ├── __init__.py
    ├── admin.py                # Configuração do admin
    ├── apps.py                 # Configuração do app
    ├── models.py               # Modelos de dados
    ├── views.py                # Views funcionais
    ├── urls.py                 # URLs do aplicativo
    ├── tests.py                # Testes automatizados
    └── migrations/             # Migrações do banco de dados
```

## ⚙️ Instalação e Configuração

### Pré-requisitos
- Python 3.8 ou superior
- pip (gerenciador de pacotes Python)

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/python-burger.git
cd python-burger
```

### 2. Crie e ative o ambiente virtual
```bash
# Criar ambiente virtual
python -m venv venv

# Ativar ambiente virtual
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate
```

### 3. Instale as dependências
```bash
pip install -r requirements.txt
```

### 4. Execute as migrações
```bash
python manage.py migrate
```

### 5. Execute o servidor de desenvolvimento
```bash
python manage.py runserver
```

### 6. Acesse o sistema
Abra seu navegador e acesse: `http://127.0.0.1:8000/`

## 🌐 Endpoints da API

### Páginas Estáticas
- `GET /` - Página inicial
- `GET /cardapio/` - Cardápio completo
- `GET /sobre/` - História do restaurante
- `GET /contato/` - Informações de contato

### Páginas Dinâmicas
- `GET /hamburguer/<int:id>/` - Detalhes de hambúrguer específico
- `GET /categoria/<str:tipo>/` - Hambúrguers por categoria

### Exemplos de Uso
```bash
# Visualizar hambúrguer específico
curl http://127.0.0.1:8000/hamburguer/1/

# Visualizar categoria premium
curl http://127.0.0.1:8000/categoria/premium/
```

## 🎯 Casos de Uso

### Para Desenvolvedores Python
- **Aprendizado**: Projeto didático para entender Django MVT
- **Portfólio**: Demonstração de habilidades com Django
- **Base**: Estrutura inicial para projetos de restaurante

### Para Negócios
- **Restaurantes Temáticos**: Sistema adaptável para restaurantes especializados
- **Delivery**: Base para expansão com sistema de entregas
- **Franquias**: Modelo replicável para múltiplas unidades

## 🧪 Testes

Execute os testes automatizados:
```bash
python manage.py test
```

Para testes específicos do aplicativo cardapio:
```bash
python manage.py test cardapio
```

## 🚀 Deploy

### Preparação para Produção
1. Configure `DEBUG = False` em `settings.py`
2. Defina `ALLOWED_HOSTS` adequadamente
3. Configure banco de dados de produção (PostgreSQL recomendado)
4. Colete arquivos estáticos: `python manage.py collectstatic`

### Opções de Deploy
- **Heroku**: Deploy rápido com suporte nativo ao Django
- **DigitalOcean**: VPS com controle total
- **AWS**: Solução escalável com EC2/RDS
- **Docker**: Containerização para ambientes consistentes

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

### Padrões de Código
- Siga PEP 8 para Python
- Use nomes descritivos para variáveis e funções
- Comente código complexo
- Mantenha views simples e focadas

## 📄 Licença

Este projeto está licenciado sob a MIT License.

## 🏆 Créditos

Desenvolvido com ❤️ por Alexandre Santos para a comunidade Python.

**Python Burger** - Onde código e sabor se encontram! 🐍🍔

---

*"Nossa missão é criar hambúrguers tão elegantes e saborosos quanto o código Python - simples na aparência, mas poderosos no resultado!"*