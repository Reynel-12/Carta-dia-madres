const envelope = document.querySelector('.envelope');
        const letter = document.querySelector('.letter');
        const instructions = document.querySelector('.instructions');

        envelope.addEventListener('click', function() {
            envelope.classList.toggle('open');
            letter.classList.toggle('open');
            
            if (letter.classList.contains('open')) {
                instructions.style.display = 'none';
            } else {
                setTimeout(() => {
                    instructions.style.display = 'block';
                }, 1000);
            }
        });

        // Para accesibilidad con teclado
        envelope.setAttribute('tabindex', '0');
        envelope.setAttribute('role', 'button');
        envelope.setAttribute('aria-label', 'Abrir carta para el Día de las Madres');
        
        envelope.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                envelope.click();
            }
        });