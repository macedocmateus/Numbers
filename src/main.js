const quantNumbers = document.getElementById('quant-numbers')
const startingNumber = document.getElementById('starting-number')
const finalNumber = document.getElementById('final-number')
const switchButton = document.getElementById('switch-button');
const switchLabel = document.getElementById('switch-label');

switchButton.addEventListener('change', function() {
    if (this.checked) {
        switchLabel.textContent = 'Não repetir número';
    } else {
        switchLabel.textContent = 'Repetir número';
    }
});
