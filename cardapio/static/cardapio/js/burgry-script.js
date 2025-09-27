// burgry-script.js - JavaScript baseado no design BURGRY

document.addEventListener('DOMContentLoaded', function() {
    
    // Inicializar todas as funcionalidades
    initializeMenuTabs();
    initializeScrollAnimations();
    initializeInteractivity();
    initializeMobileOptimizations();
    initializeNewsletter();
    
    console.log('🍔 Python Burger (BURGRY Style) - Sistema carregado!');
});

// Sistema de abas do menu
function initializeMenuTabs() {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active de todas as abas
            menuTabs.forEach(t => t.classList.remove('active'));
            
            // Adiciona active na aba clicada
            this.classList.add('active');
            
            // Anima os itens do menu
            menuItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                    item.style.transition = `all 0.5s ease ${index * 0.1}s`;
                }, 100);
            });
            
            console.log('🍔 Menu tab ativada:', this.textContent);
        });
    });
}

// Animações de scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animação especial para cards
                if (entry.target.classList.contains('category-card') || 
                    entry.target.classList.contains('menu-item') ||
                    entry.target.classList.contains('testimonial-card') ||
                    entry.target.classList.contains('news-card')) {
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animatedElements = document.querySelectorAll(`
        .category-card,
        .promo-card,
        .menu-item,
        .testimonial-card,
        .news-card,
        .app-feature,
        .about-feature
    `);
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
    
    // Parallax effect para hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.burger-floating');
        
        if (heroImage) {
            const parallax = scrolled * 0.3;
            heroImage.style.transform = `translateY(${parallax}px) rotate(${scrolled * 0.1}deg)`;
        }
        
        // Efeito parallax no status floating
        const statusFloating = document.querySelector('.status-floating');
        if (statusFloating && window.innerWidth > 768) {
            const statusParallax = scrolled * 0.1;
            statusFloating.style.transform = `translateY(${statusParallax}px)`;
        }
    });
}

// Interatividade geral
function initializeInteractivity() {
    // Hover effects nos cards de categoria
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(255, 165, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Hover effects nos itens do menu
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 15px 30px rgba(255, 165, 0, 0.2)';
            
            const image = this.querySelector('.menu-item-image');
            if (image) {
                image.style.transform = 'scale(1.1) rotate(5deg)';
                image.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
            
            const image = this.querySelector('.menu-item-image');
            if (image) {
                image.style.transform = 'scale(1) rotate(0deg)';
            }
        });
        
        // Click effect
        item.addEventListener('click', function() {
            createRippleEffect(this, event);
            console.log('🍔 Menu item clicado:', this.querySelector('h4')?.textContent);
        });
    });
    
    // Hover effects nos cards de testimunho
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 30px rgba(255, 165, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Botões interativos
    const buttons = document.querySelectorAll(`
        .learn-more-btn,
        .category-btn,
        .promo-btn,
        .about-btn,
        .reservation-btn,
        .newsletter-btn,
        .app-store-btn,
        .google-play-btn
    `);
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRippleEffect(this, e);
            
            // Log específico por tipo de botão
            if (this.classList.contains('learn-more-btn')) {
                scrollToSection('.about-section');
            } else if (this.classList.contains('category-btn')) {
                scrollToSection('.menu-section');
            } else if (this.classList.contains('reservation-btn')) {
                showReservationModal();
            }
            
            console.log('🔗 Botão clicado:', this.textContent.trim());
        });
        
        // Hover effect adicional
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Interatividade do status badge
    const statusBadge = document.querySelector('.status-badge');
    if (statusBadge) {
        statusBadge.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            showStatusTooltip(this);
        });
    }
}

// Otimizações para mobile
function initializeMobileOptimizations() {
    if (window.innerWidth <= 768) {
        // Reduzir animações para economia de bateria
        const style = document.createElement('style');
        style.textContent = `
            @media (prefers-reduced-motion: reduce) {
                *, *::before, *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Touch feedback melhorado
        const touchElements = document.querySelectorAll(`
            .category-card,
            .menu-item,
            .testimonial-card,
            .news-card,
            button
        `);
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.opacity = '0.8';
                this.style.transform = 'scale(0.95)';
            });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.opacity = '1';
                    this.style.transform = 'scale(1)';
                }, 100);
            });
        });
    }
}

// Sistema de newsletter
function initializeNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterBtn = document.querySelector('.newsletter-btn');
    
    if (newsletterForm && newsletterInput && newsletterBtn) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = newsletterInput.value.trim();
            
            if (email && isValidEmail(email)) {
                // Animação de sucesso
                newsletterBtn.textContent = '✅ Inscrito!';
                newsletterBtn.style.backgroundColor = '#22c55e';
                newsletterInput.value = '';
                
                setTimeout(() => {
                    newsletterBtn.textContent = '✈️ Subscribe Now';
                    newsletterBtn.style.backgroundColor = '#000000';
                }, 3000);
                
                console.log('📧 Newsletter:', email);
                showSuccessMessage('Newsletter', 'Obrigado! Você foi inscrito com sucesso!');
            } else {
                showErrorMessage('Email inválido');
                newsletterInput.focus();
            }
        });
        
        // Enter para submit
        newsletterInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                newsletterForm.dispatchEvent(new Event('submit'));
            }
        });
    }
}

// Utilitários
function createRippleEffect(element, event) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255, 165, 0, 0.6);
        transform: translate(-50%, -50%);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 100;
    `;
    
    // Adicionar CSS da animação se não existir
    if (!document.querySelector('#ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes ripple {
                to {
                    width: 200px;
                    height: 200px;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Tornar o elemento relativo
    if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative';
    }
    
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function scrollToSection(selector) {
    const section = document.querySelector(selector);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function showStatusTooltip(element) {
    const isOpen = element.classList.contains('status-open');
    
    const tooltip = document.createElement('div');
    tooltip.style.cssText = `
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        background: #1a1a1a;
        color: #ffffff;
        padding: 10px 15px;
        border-radius: 8px;
        font-size: 0.9rem;
        white-space: nowrap;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        margin-top: 10px;
        opacity: 0;
        animation: fadeInTooltip 0.3s ease forwards;
    `;
    
    if (isOpen) {
        tooltip.textContent = '🕐 Seg-Dom: 11h30-23h00 | 🚚 Delivery 24h';
    } else {
        tooltip.textContent = '❌ Fechado agora | 🚚 Delivery disponível';
    }
    
    element.style.position = 'relative';
    element.appendChild(tooltip);
    
    setTimeout(() => {
        tooltip.style.animation = 'fadeInTooltip 0.3s ease reverse';
        setTimeout(() => tooltip.remove(), 300);
    }, 3000);
}

function showReservationModal() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        backdrop-filter: blur(10px);
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: #1a1a1a;
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        max-width: 400px;
        margin: 20px;
        border: 2px solid #FFA500;
    `;
    
    content.innerHTML = `
        <h3 style="color: #FFA500; margin-bottom: 20px; font-size: 1.5rem;">📅 Reserva de Mesa</h3>
        <p style="color: #cccccc; margin-bottom: 30px;">Entre em contato conosco para reservar sua mesa!</p>
        <div style="margin-bottom: 20px;">
            <p style="color: #ffffff; margin-bottom: 10px;">📞 (11) 3000-PYTHON</p>
            <p style="color: #ffffff; margin-bottom: 10px;">📱 WhatsApp: (11) 99999-8888</p>
            <p style="color: #ffffff;">📧 reservas@pythonburger.com</p>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" 
                style="background: #FFA500; color: #000; border: none; padding: 12px 25px; border-radius: 8px; font-weight: 700; cursor: pointer;">
            Fechar
        </button>
    `;
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    // Fechar ao clicar fora
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function showSuccessMessage(title, message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <h4 style="margin-bottom: 5px; font-size: 1rem;">${title}</h4>
        <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">${message}</p>
    `;
    
    // Adicionar CSS da animação
    if (!document.querySelector('#notification-style')) {
        const style = document.createElement('style');
        style.id = 'notification-style';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function showErrorMessage(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <p style="margin: 0; font-size: 0.9rem;">❌ ${message}</p>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Contador de visitantes (simulado)
function initializeVisitorCounter() {
    let visitors = localStorage.getItem('pythonburger_visitors') || 0;
    visitors = parseInt(visitors) + 1;
    localStorage.setItem('pythonburger_visitors', visitors);
    
    console.log(`🎯 Visitante número: ${visitors}`);
}

// Easter egg - Konami Code
function initializeEasterEgg() {
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.code === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateEasterEgg() {
    // Efeito especial
    document.body.style.animation = 'rainbow 2s ease-in-out';
    
    if (!document.querySelector('#easter-egg-style')) {
        const style = document.createElement('style');
        style.id = 'easter-egg-style';
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                50% { filter: hue-rotate(180deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    console.log('🎉 Easter Egg ativado! Você descobriu o segredo do Python Burger! 🐍🍔');
    
    setTimeout(() => {
        showSuccessMessage('🎉 Easter Egg!', 'Código especial: "PYTHON20" para 20% off!');
        document.body.style.animation = '';
    }, 2000);
}

// Performance monitoring
function initializePerformanceMonitoring() {
    const startTime = performance.now();
    
    window.addEventListener('load', function() {
        const loadTime = performance.now() - startTime;
        console.log(`⚡ Python Burger carregado em ${Math.round(loadTime)}ms`);
        
        // Simular analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load_time', {
                'custom_parameter': Math.round(loadTime)
            });
        }
    });
}

// Lazy loading para imagens futuras
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                    
                    img.style.opacity = '0';
                    img.onload = () => {
                        img.style.transition = 'opacity 0.5s ease';
                        img.style.opacity = '1';
                    };
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Smooth scroll para links internos
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Inicializar funcionalidades adicionais
document.addEventListener('DOMContentLoaded', function() {
    initializeVisitorCounter();
    initializeEasterEgg();
    initializePerformanceMonitoring();
    initializeLazyLoading();
    initializeSmoothScroll();
});

// Cleanup ao sair da página
window.addEventListener('beforeunload', function() {
    console.log('🍔 Saindo do Python Burger... Volte sempre! Powered by BURGRY Style');
});

// Função para debug (removível em produção)
function debugInfo() {
    console.log('🔧 Python Burger Debug Info:');
    console.log('- Seções carregadas:', document.querySelectorAll('section').length);
    console.log('- Cards de menu:', document.querySelectorAll('.menu-item').length);
    console.log('- Animações ativas:', document.querySelectorAll('[style*="transition"]').length);
    console.log('- Status do restaurante:', document.querySelector('.status-open') ? 'Aberto' : 'Fechado');
}