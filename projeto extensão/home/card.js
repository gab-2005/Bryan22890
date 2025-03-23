var buttons = document.querySelectorAll('#Mais-button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var card = this.closest('.card'); // Encontra o card correto
        card.classList.toggle('active');

        this.textContent = card.classList.contains('active') ? 'Menos' : 'Mais';
    });
});