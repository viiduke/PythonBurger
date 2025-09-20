// JavaScript do Python Burger - Interatividade simples

// Aguarda a página carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Mensagem de boas-vindas no console
    console.log('🍔 Bem-vindo ao Python Burger! Sistema carregado com sucesso!');
    
    // Adiciona efeito de click nos links do menu
    const menuLinks = document.querySelectorAll('.nav a');
    
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            console.log('🔗 Navegando para: ' + link.textContent);
        });
    });
    
    // Destaca o item de menu atual
    const currentUrl = window.location.pathname;
    menuLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentUrl) {
            link.style.background = '#3776AB';
            link.style.color = 'white';
        }
    });
});