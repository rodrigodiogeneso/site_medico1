// Menu mobile toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// Form submission para WhatsApp
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Coletar dados do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Formatar mensagem para WhatsApp
        const whatsappMessage = `Olá, Dra. Clarisse Diógenes! Gostaria de agendar uma consulta.%0A%0A*Nome:* ${name}%0A*E-mail:* ${email}%0A*Telefone:* ${phone}%0A*Mensagem:* ${message}`;
        
        // Número do WhatsApp (84996904652)
        const whatsappNumber = '5584996904652'; // Formato internacional sem o +
        
        // Criar URL do WhatsApp
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        
        // Abrir WhatsApp em uma nova janela
        window.open(whatsappURL, '_blank');
        
        // Limpar formulário
        contactForm.reset();
        
        // Feedback para o usuário
        alert('Você será redirecionado para o WhatsApp para concluir o agendamento.');
    });
}

// Smooth scrolling para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});