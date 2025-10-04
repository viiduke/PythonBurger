// JavaScript do Python Burger - Sistema de Tema Claro/Escuro

// Aguarda a página carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Mensagem de boas-vindas no console
    console.log('🍔 Bem-vindo ao Python Burger! Sistema carregado com sucesso!');
    
    // Inicializar sistema de temas
    initializeThemeToggle();
    
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
            link.classList.add('active');
        }
    });
});

// Sistema de alternância de tema
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Verificar se há preferência salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Aplicar tema salvo ou manter padrão (CLARO)
    if (savedTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        console.log('🌙 Modo escuro carregado');
    } else {
        // Modo claro é o padrão agora
        htmlElement.setAttribute('data-theme', 'light');
        console.log('☀️ Modo claro carregado');
    }
    
    // Event listener para o botão de alternância
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = htmlElement.getAttribute('data-theme');
            
            // Alternar entre claro e escuro
            if (currentTheme === 'dark') {
                htmlElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                console.log('🌞 Alternado para modo claro');
            } else {
                htmlElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                console.log('🌙 Alternado para modo escuro');
            }
        });
    }
}